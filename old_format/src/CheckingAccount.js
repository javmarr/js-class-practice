var CheckingAccount = function(name) {
    this.owner = name;
    this.balance = 0;
    this.insufficientFundsFee = 40;
}

CheckingAccount.prototype.deposit = function (amount) {
  this.balance += amount;
}

CheckingAccount.prototype.withdrawal = function (amount) {
  if(this.balance < amount) {
    console.log(`Not enough money, charging an extra: ${this.insufficientFundsFee}`);
  }
  this.balance -= (amount + this.insufficientFundsFee);
}

CheckingAccount.prototype.printInfo = function (amount) {
  console.log(`${this.owner} | $${this.balance}`);
}

CheckingAccount.prototype.processCheck = function () {

}
module.exports = {
  CheckingAccount: CheckingAccount,
  variable: 1
};
