//const _deploy_contracts = require("../migrations/2_deploy_contracts");

var StarNotary = artifacts.require('./starNotary.sol');//JSON representation AKA contract abstraction

let instance;
let accounts;
var owner;

contract('StarNotary', async(accs)=>{
    accounts = accs;
    owner = accounts[0];
    //instance = await StarNotary.deployed();
})

    it('has correct name', async()=>{
        instance = await StarNotary.deployed();
        let starName = await instance.starName.call();
        assert.equal(starName, "Awesome Udacity Star");
    })

    it('can claim a star', async()=>{
        await instance.claimStar({from:owner});
        assert.equal(await instance.starOwner.call(), owner);

    })
    it('can change owners', async()=>{
        var secondUser = accounts[1];
        await instance.claimStar({from: owner});
        let starOwner = await instance.starOwner.call();
        assert.equal(starOwner, owner);

        await instance.claimStar({from: secondUser});
        starOwner = await instance.starOwner.call();
        assert.equal(starOwner, secondUser);



    })