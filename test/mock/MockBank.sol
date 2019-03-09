pragma solidity ^0.5.5;

import "../../contracts/InstaLend.sol";


contract MockBank is InstaLend {
    constructor()
        public
        InstaLend(address(this), 1)
    {
    }
}
