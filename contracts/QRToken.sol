pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/cryptography/ECDSA.sol";
import "./IndexedMerkleProof.sol";


contract QRToken {
    using ECDSA for bytes;
    using IndexedMerkleProof for bytes;

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

    function create(
      IERC20 token,
      uint256 sumTokenAmount,
      uint256 codesCount,
      uint160 root,
      uint256 deadline
    ) public {
        require(codesCount <= MAX_CODES_COUNT);
        require(deadline > now);

        token.transferFrom(msg.sender, address(this), sumTokenAmount);
        Distribution storage distribution = distributions[root];
        distribution.token = token;
        distribution.sumAmount = sumTokenAmount;
        distribution.codesCount = codesCount;
        distribution.deadline = deadline;
        distribution.sponsor = msg.sender;
    }

    function redeem(
        address receiver,
        bytes calldata signature,
        bytes calldata merkleProof
    )
        external
    {
        bytes32 messageHash = ECDSA.toEthSignedMessageHash(keccak256(abi.encodePacked(receiver)));
        address signer = ECDSA.recover(messageHash, signature);
        (uint160 root, uint256 index) = merkleProof.compute(uint160(signer));
        Distribution storage distribution = distributions[root];
        require(distribution.bitMask[index / 32] & (1 << (index % 32)) == 0);

        distribution.bitMask[index / 32] = distribution.bitMask[index / 32] | (1 << (index % 32));
        distribution.token.transfer(receiver, distribution.sumAmount / distribution.codesCount);
        emit Redeemed(root, index, receiver);
    }

    function abort(uint160 root) public {
        Distribution storage distribution = distributions[root];
        require(now > distribution.deadline);

        uint256 count = 0;
        for (uint i = 0; i < 1024; i++) {
            if (distribution.bitMask[i / 32] & (1 << (i % 32)) != 0) {
                count += distribution.sumAmount / distribution.codesCount;
            }
        }
        distribution.token.transfer(distribution.sponsor, distribution.sumAmount - count);
        delete distributions[root];
    }
}
