// Export classes using ES6 format
export class BankAccount {
  constructor(name) {
    this.owner = name;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdrawal(amount) {
    this.balance -= amount;
  }

  printInfo(){
    console.log(`${this.owner} | $${this.balance}`);
  }
}
