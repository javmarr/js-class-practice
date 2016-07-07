var BankAccount = require('./BankAccount.js').BankAccount;

var CheckingAccount = function(name) {
    BankAccount.call(this, name);
    this.insufficientFundsFee = 40;
}
CheckingAccount.prototype = Object.create(BankAccount.prototype);

CheckingAccount.prototype.withdrawal = function (amount) {
  if(this.balance < amount) {
    console.log(`Not enough money, charging an extra: ${this.insufficientFundsFee}`);
  }
  this.balance -= (amount + this.insufficientFundsFee);
}

CheckingAccount.prototype.processCheck = function () {

}

module.exports = {
  CheckingAccount: CheckingAccount
};
