pragma solidity ^0.5.5;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";


contract InstaLend {
    using SafeMath for uint;

    address private _feesReceiver;
    uint256 private _feesPercent;
    bool private _inLendingMode;

    modifier notInLendingMode {
        require(!_inLendingMode);
        _;
    }

    constructor(address receiver, uint256 percent) public {
        _feesReceiver = receiver;
        _feesPercent = percent;
    }

    function feesReceiver() public view returns(address) {
        return _feesReceiver;
    }

    function feesPercent() public view returns(uint256) {
        return _feesPercent;
    }

    function lend(
        IERC20[] memory tokens,
        uint256[] memory amounts,
        address target,
        bytes memory data
    )
        public
        notInLendingMode
    {
        _inLendingMode = true;

        // Backup original balances and lend tokens
        uint256[] memory prevAmounts = new uint256[](tokens.length);
        for (uint i = 0; i < tokens.length; i++) {
            prevAmounts[i] = tokens[i].balanceOf(address(this));
            require(tokens[i].transfer(target, amounts[i]));
        }

        // Perform arbitrary call
        (bool res,) = target.call(data);    // solium-disable-line security/no-low-level-calls
        require(res, "Invalid arbitrary call");

        // Ensure original balances were restored
        for (uint i = 0; i < tokens.length; i++) {
            uint256 expectedFees = amounts[i].mul(_feesPercent).div(100);
            require(tokens[i].balanceOf(address(this)) >= prevAmounts[i].add(expectedFees));
            if (_feesReceiver != address(this)) {
                require(tokens[i].transfer(_feesReceiver, expectedFees));
            }
        }

        _inLendingMode = false;
    }
}
