pragma solidity ^0.5.5;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/cryptography/ECDSA.sol";
import "./IndexedMerkleProof.sol";
import "./InstaLend.sol";
import "./CheckedERC20.sol";
import "./IKyberNetwork.sol";
import "./AnyPaymentReceiver.sol";


contract QRToken is InstaLend, AnyPaymentReceiver {
    using SafeMath for uint;
    using ECDSA for bytes;
    using IndexedMerkleProof for bytes;
    using CheckedERC20 for IERC20;

    uint256 constant public MAX_CODES_COUNT = 1024;
    uint256 constant public MAX_WORDS_COUNT = (MAX_CODES_COUNT + 31) / 32;

    struct Distribution {
        IERC20 token;
        uint256 sumAmount;
        uint256 codesCount;
        uint256 deadline;
        address sponsor;
        uint256[32] bitMask; // MAX_WORDS_COUNT
    }

    mapping(uint160 => Distribution) public distributions;

    event Created();
    event Redeemed(uint160 root, uint256 index, address receiver);

    constructor()
        public
        InstaLend(msg.sender, 1)
    {
    }

    function create(
        IERC20 token,
        uint256 sumTokenAmount,
        uint256 codesCount,
        uint160 root,
        uint256 deadline
    )
        external
        notInLendingMode
    {
        require(0 < sumTokenAmount);
        require(0 < codesCount && codesCount <= MAX_CODES_COUNT);
        require(deadline > now);

        token.checkedTransferFrom(msg.sender, address(this), sumTokenAmount);
        Distribution storage distribution = distributions[root];
        distribution.token = token;
        distribution.sumAmount = sumTokenAmount;
        distribution.codesCount = codesCount;
        distribution.deadline = deadline;
        distribution.sponsor = msg.sender;
    }

    function redeemed(uint160 root, uint index) public view returns(bool) {
        Distribution storage distribution = distributions[root];
        return distribution.bitMask[index / 32] & (1 << (index % 32)) != 0;
    }

    function calcRootAndIndex(
        bytes memory signature,
        bytes memory merkleProof,
        bytes memory message
    )
        public
        pure
        returns(uint160 root, uint256 index)
    {
        bytes32 messageHash = keccak256(message);
        bytes32 signedHash = ECDSA.toEthSignedMessageHash(messageHash);
        address signer = ECDSA.recover(signedHash, signature);
        uint160 signerHash = uint160(uint256(keccak256(abi.encodePacked(signer))));
        return merkleProof.compute(signerHash);
    }

    function redeem(
        bytes calldata signature,
        bytes calldata merkleProof
    )
        external
        notInLendingMode
    {
        (uint160 root, uint256 index) = calcRootAndIndex(signature, merkleProof, abi.encodePacked(msg.sender));
        Distribution storage distribution = distributions[root];
        require(distribution.bitMask[index / 32] & (1 << (index % 32)) == 0);

        distribution.bitMask[index / 32] = distribution.bitMask[index / 32] | (1 << (index % 32));
        distribution.token.checkedTransfer(msg.sender, distribution.sumAmount.div(distribution.codesCount));
        emit Redeemed(root, index, msg.sender);
    }

    function redeemWithFee(
        IKyberNetwork kyber, // 0x818E6FECD516Ecc3849DAf6845e3EC868087B755
        address receiver,
        uint256 feePrecent,
        bytes calldata signature,
        bytes calldata merkleProof
    )
        external
        notInLendingMode
    {
        (uint160 root, uint256 index) = calcRootAndIndex(signature, merkleProof, abi.encodePacked(receiver, feePrecent));
        Distribution storage distribution = distributions[root];
        require(distribution.bitMask[index / 32] & (1 << (index % 32)) == 0);

        distribution.bitMask[index / 32] = distribution.bitMask[index / 32] | (1 << (index % 32));
        uint256 reward = distribution.sumAmount.div(distribution.codesCount);
        uint256 fee = reward.mul(feePrecent).div(100);
        distribution.token.checkedTransfer(receiver, reward.sub(fee));
        emit Redeemed(root, index, msg.sender);

        uint256 gotEther = _processPayment(kyber, address(distribution.token), fee);
        msg.sender.transfer(gotEther);
    }

    function abort(uint160 root)
        public
        notInLendingMode
    {
        Distribution storage distribution = distributions[root];
        require(now > distribution.deadline);

        uint256 count = 0;
        for (uint i = 0; i < 1024; i++) {
            if (distribution.bitMask[i / 32] & (1 << (i % 32)) != 0) {
                count += distribution.sumAmount / distribution.codesCount;
            }
        }
        distribution.token.checkedTransfer(distribution.sponsor, distribution.sumAmount.sub(count));
        delete distributions[root];
    }

    function() external payable {
        require(msg.sender != tx.origin);
    }
}
