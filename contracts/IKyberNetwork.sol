pragma solidity ^0.5.2;


contract IKyberNetwork {
    function trade(
        address src,
        uint256 srcAmount,
        address dest,
        address destAddress,
        uint256 maxDestAmount,
        uint256 minConversionRate,
        address walletId
    )
        public
        payable
        returns(uint);

    function getExpectedRate(
        address source,
        address dest,
        uint srcQty
    )
        public
        view
        returns (
            uint expectedPrice,
            uint slippagePrice
        );
}
