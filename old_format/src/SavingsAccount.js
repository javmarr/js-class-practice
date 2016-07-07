var BankAccount = require('./BankAccount.js').BankAccount;

// Export classes using old format
var SavingsAccount = function(name) {
    BankAccount.call(this, name);
    this.annualInterestRate = 0.3;
}
SavingsAccount.prototype = Object.create(BankAccount.prototype);

SavingsAccount.prototype.depositMonthlyInterest = function () {
  console.log(`Adding monthly interest`);
  this.balance *= (1+this.annualInterestRate);
}
module.exports = {
  SavingsAccount: SavingsAccount
};
