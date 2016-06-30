// Import using ES6 (2015)
import {BankAccount} from './BankAccount.js';
import {CheckingAccount} from './CheckingAccount.js';
import {SavingsAccount} from './SavingsAccount.js';
// import * as imported from 'BankAccount.js';

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
