// Export classes using ES6 format
var BankAccount = function(name) {
    this.owner = name;
    this.balance = 0;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
}

BankAccount.prototype.withdrawal = function (amount) {
  this.balance -= amount;
}

BankAccount.prototype.printInfo = function (amount) {
  console.log(`${this.owner} | $${this.balance}`);
}

module.exports = {
  BankAccount: BankAccount,
  variable: 1
};
