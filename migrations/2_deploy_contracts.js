const DisasterTraining = artifacts.require("DisasterTraining");

module.exports = function (deployer) {
  deployer.deploy(DisasterTraining);
};
