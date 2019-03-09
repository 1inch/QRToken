const { shouldFail, BN } = require('openzeppelin-test-helpers');

const MockToken = artifacts.require('MockToken');
const MockBank = artifacts.require('MockBank');
const MockBorrower = artifacts.require('MockBorrower');

contract('InstaLend', function ([_, addr1]) {
    beforeEach(async function () {
        this.token = await MockToken.new();
        this.bank = await MockBank.new();
        this.borrower = await MockBorrower.new();

        await this.token.mint(this.bank.address, 2000);
        await this.token.mint(this.borrower.address, 20);

        this.balance = new BN(2000);
        this.amount = new BN(1000);
        this.result = new BN(2010);
    });

    it('should works in case of full return with fees', async function () {
        await this.borrower.arbitrageReturn(this.bank.address, this.token.address, this.amount);
        (await this.token.balanceOf(this.bank.address)).should.be.bignumber.equal(this.result);
    });

    it('should works in case of not enough return with fees', async function () {
        await shouldFail.reverting(
            this.borrower.arbitrageNotEnoughReturn(this.bank.address, this.token.address, this.amount)
        );
    });

    it('should works in case of return at all', async function () {
        await shouldFail.reverting(
            this.borrower.arbitrageNoReturn(this.bank.address, this.token.address, this.amount)
        );
    });
});
