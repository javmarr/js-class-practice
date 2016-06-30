'use strict';

var _BankAccount = require('./BankAccount.js');

var _CheckingAccount = require('./CheckingAccount.js');

var _SavingsAccount = require('./SavingsAccount.js');

// import * as imported from 'BankAccount.js';

var acc1 = new _BankAccount.BankAccount("Bob"); // Import using ES6 (2015)

acc1.printInfo();
acc1.deposit(10);
acc1.deposit(25);
acc1.printInfo();
acc1.withdrawal(20);
acc1.printInfo();

console.log('----');

var acc2 = new _CheckingAccount.CheckingAccount("Tom");
acc2.printInfo();
acc2.deposit(10);
acc2.printInfo();
acc2.withdrawal(20);
acc2.printInfo();

console.log('----');

var acc3 = new _SavingsAccount.SavingsAccount("Rob");
acc3.deposit(50);
acc3.printInfo();
acc3.depositMonthlyInterest();
acc3.printInfo();
acc3.withdrawal(20);
acc3.printInfo();