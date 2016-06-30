import {BankAccount} from './BankAccount';

export class SavingsAccount extends BankAccount {
  constructor(name) {
    super(name);
    this.annualInterestRate = 0.3;
  }

  depositMonthlyInterest() {
    console.log(`Adding monthly interest`);
    this.balance *= (1+this.annualInterestRate);
  }
}
