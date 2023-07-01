const { expect } = require("chai");

describe("Token contract creator", function () {
    let ownerBalance;
    let erc20Token;
    let stakingContract;
    let owner;
    const amountTokens = 10000n * 10n ** 18n;

    it("Should deploy ERC20 contract", async function () {
        const [ownerContract] = await ethers.getSigners();
        owner = ownerContract;
        erc20Token = await ethers.deployContract("TokenERC20");
        console.log(`ERC20 address => ${erc20Token.address}`);
    });

    it("Owner should have 100_000 tokens", async function () {
        ownerBalance = await erc20Token.balanceOf(owner.address);
        console.log(ownerBalance);
        expect(ownerBalance).to.equal(amountTokens * 10n);
    })

    it("Should deploy Staking contract", async function () {
        const ERC20Staking = await ethers.getContractFactory("ERC20Staking");
        stakingContract = await ERC20Staking.deploy(erc20Token.address);
        await stakingContract.deployed();
        console.log(`Staking contract Address => ${stakingContract.address}`);
    });

    it("Should allow stakingContract to transfer 10_000 tokens", async function () {
        await erc20Token.approve(stakingContract.address, amountTokens);
    })

    it("Should deposit tokens on Staking contract", async function () {
        await stakingContract.deposit(amountTokens);
    })

    it("Should compound tokens on Staking contract", async function () {
        await stakingContract.compound();
    })

    it("Should claim tokens on Staking contract", async function () {
        await stakingContract.claim();
    })

    it("Should withdraw tokens on Staking contract", async function () {
        await stakingContract.withdraw(amountTokens);
    })

});