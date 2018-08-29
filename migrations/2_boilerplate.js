var Boilerplate = artifacts.require("./Boilerplate.sol");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Boilerplate, accounts[0]);
};
