var QRToken = artifacts.require('./QRToken.sol');

module.exports = function (deployer) {
    deployer.deploy(QRToken);
};
