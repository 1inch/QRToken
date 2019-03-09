pragma solidity ^0.5.5;

import "./MockBank.sol";


contract MockBorrower {
    function arbitrageReturn(MockBank bank, IERC20 token, uint256 amount) public {
        bytes memory data = abi.encodeWithSelector(this.magicMethodReturn.selector, token, amount);
        IERC20[] memory tokens = new IERC20[](1);
        tokens[0] = token;
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = amount;
        bank.lend(tokens, amounts, address(this), data);
    }

    function magicMethodReturn(IERC20 token, uint256 amount) public {
        // Do some magic to earn no tokens
        // ...

        // Return funds to bank
        token.transfer(msg.sender, amount * (100 + 1) / 100);
    }

    //

    function arbitrageNotEnoughReturn(MockBank bank, IERC20 token, uint256 amount) public {
        bytes memory data = abi.encodeWithSelector(this.magicMethodNotEnoughReturn.selector, token, amount);
        IERC20[] memory tokens = new IERC20[](1);
        tokens[0] = token;
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = amount;
        bank.lend(tokens, amounts, address(this), data);
    }

    function magicMethodNotEnoughReturn(IERC20 token, uint256 amount) public {
        // Do some magic to earn no tokens
        // ...

        // Return funds to bank
        token.transfer(msg.sender, amount);
    }

    //

    function arbitrageNoReturn(MockBank bank, IERC20 token, uint256 amount) public {
        bytes memory data = abi.encodeWithSelector(this.magicMethodNoReturn.selector, token, amount);
        IERC20[] memory tokens = new IERC20[](1);
        tokens[0] = token;
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = amount;
        bank.lend(tokens, amounts, address(this), data);
    }

    function magicMethodNoReturn(IERC20 token, uint256 amount) public {
        // Do some magic to earn no tokens
        // ...

        // Forgot to return funds to bank
        // token.transfer(msg.sender, amount);
    }
}
