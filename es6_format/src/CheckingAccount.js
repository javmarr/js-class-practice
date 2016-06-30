import {BankAccount} from './BankAccount';
export class CheckingAccount extends BankAccount {
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
