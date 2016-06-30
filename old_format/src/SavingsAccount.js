// Export classes using old format
var SavingsAccount = function(name) {
    this.owner = name;
    this.balance = 0;
    this.annualInterestRate = 0.3;
}

SavingsAccount.prototype.deposit = function (amount) {
  this.balance += amount;
}

SavingsAccount.prototype.withdrawal = function (amount) {
  this.balance -= amount;
}

SavingsAccount.prototype.printInfo = function (amount) {
  console.log(`${this.owner} | $${this.balance}`);
}

SavingsAccount.prototype.depositMonthlyInterest = function () {
  console.log(`Adding monthly interest`);
  this.balance *= (1+this.annualInterestRate);
}
module.exports = {
  SavingsAccount: SavingsAccount,
  variable: 1
};
