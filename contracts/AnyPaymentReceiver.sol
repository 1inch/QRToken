pragma solidity ^0.5.5;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";
import "./IKyberNetwork.sol";
import "./CheckedERC20.sol";


contract AnyPaymentReceiver is Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    using CheckedERC20 for IERC20;

    address constant public ETHER_ADDRESS = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    function _processPayment(
        IKyberNetwork kyber,
        address paymentToken,
        uint256 paymentAmount
    )
        internal
        returns(uint256)
    {
        uint256 previousBalance = address(this).balance;

        IERC20(paymentToken).safeApprove(address(kyber), paymentAmount);
        kyber.trade(
            paymentToken,
            paymentAmount,
            ETHER_ADDRESS,
            address(this),
            1 << 255,
            0,
            address(0)
        );

        uint256 currentBalance = address(this).balance;
        return currentBalance.sub(previousBalance);
    }
}
