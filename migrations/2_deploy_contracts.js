var StarNotary = artifacts.require('./starNotary.sol');// we're using artifacts that require the JSON format of our smart contract, then we are deploying it using the function below

module.exports = function (deployer){
    deployer.deploy(StarNotary);
}