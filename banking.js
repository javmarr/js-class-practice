class BankAccount {
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

class CheckingAccount extends BankAccount {
  constructor(name) {
    super(name);
    this.insufficientFundsFee = 40;
  }
  processCheck(checkToProcess) {

  }
  withdrawal(amount) {
    if(this.balance < amount) {
      console.log(`Not enough money, charging an extra: ${this.insufficientFundsFee}`);
    }
    this.balance -= (amount + this.insufficientFundsFee);
  }
}

class SavingsAccount extends BankAccount {
  constructor(name) {
    super(name);
    this.annualInterestRate = 0.3;
  }

  depositMonthlyInterest() {
    console.log(`Adding monthly interest`);
    this.balance *= (1+this.annualInterestRate);
  }
}

var acc1 = new BankAccount("Bob");
acc1.printInfo();
acc1.deposit(10);
acc1.deposit(25);
acc1.printInfo();
acc1.withdrawal(20);
acc1.printInfo();

console.log(`----`);

var acc2 = new CheckingAccount("Tom");
acc2.printInfo();
acc2.deposit(10);
acc2.printInfo();
acc2.withdrawal(20);
acc2.printInfo();

console.log(`----`);

var acc3 = new SavingsAccount("Rob");
acc3.deposit(50);
acc3.printInfo();
acc3.depositMonthlyInterest();
acc3.printInfo();
acc3.withdrawal(20);
acc3.printInfo();

// class SavingsAccount extends BankAccount {
//   processCheck(checkToProcess) {
//
//   }
//   withdrawal() {
//
//   }
// }
