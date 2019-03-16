pragma solidity ^0.5.5;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";


library CheckedERC20 {
    using SafeMath for uint;
    using SafeERC20 for IERC20;

    function checkedTransfer(IERC20 token, address to, uint256 value) internal {
        if (value > 0) {
            uint256 balance = token.balanceOf(address(this));
            token.safeTransfer(to, value);
            require(token.balanceOf(address(this)) == balance.sub(value), "checkedTransfer: Final balance didn't match");
        }
    }

    function checkedTransferFrom(IERC20 token, address from, address to, uint256 value) internal {
        if (value > 0) {
            uint256 toBalance = token.balanceOf(to);
            token.safeTransferFrom(from, to, value);
            require(token.balanceOf(to) == toBalance.add(value), "checkedTransfer: Final balance didn't match");
        }
    }
}
