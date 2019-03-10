pragma solidity ^0.5.5;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "./IKyberNetwork.sol";
import "./CheckedERC20.sol";


contract AnyPaymentReceiver is Ownable {
    using SafeMath for uint256;
    using CheckedERC20 for IERC20;

    address constant public ETHER_ADDRESS = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    function _processPayment(
        IKyberNetwork kyber,
        address desiredToken,
        address paymentToken,
        uint256 paymentAmount
    )
        internal
        returns(uint256)
    {
        uint256 previousBalance = _balanceOf(desiredToken);

        // Receive payment
        if (paymentToken != address(0)) {
            IERC20(paymentToken).checkedTransferFrom(msg.sender, address(this), paymentAmount);
        } else {
            require(msg.value >= paymentAmount);
        }

        // Convert payment if needed
        if (paymentToken != desiredToken) {
            if (paymentToken != address(0)) {
                require(IERC20(paymentToken).asmApprove(address(kyber), paymentAmount));
            }

            kyber.trade.value(msg.value)(
                (paymentToken == address(0)) ? ETHER_ADDRESS : paymentToken,
                (paymentToken == address(0)) ? msg.value : paymentAmount,
                (desiredToken == address(0)) ? ETHER_ADDRESS : desiredToken,
                address(this),
                1 << 255,
                0,
                address(0)
            );
        }

        uint256 currentBalance = _balanceOf(desiredToken);
        return currentBalance.sub(previousBalance);
    }

    function _balanceOf(address token) internal view returns(uint256) {
        if (token == address(0)) {
            return address(this).balance;
        }
        return IERC20(token).balanceOf(address(this));
    }

    function _returnRemainder(address payable renter, IERC20 token, uint256 remainder) internal {
        if (token == IERC20(0)) {
            renter.transfer(remainder);
        } else {
            token.transfer(renter, remainder);
        }
    }
}
