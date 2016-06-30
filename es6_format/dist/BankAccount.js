"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Export classes using ES6 format

var BankAccount = exports.BankAccount = function () {
  function BankAccount(name) {
    _classCallCheck(this, BankAccount);

    this.owner = name;
    this.balance = 0;
  }

  _createClass(BankAccount, [{
    key: "deposit",
    value: function deposit(amount) {
      this.balance += amount;
    }
  }, {
    key: "withdrawal",
    value: function withdrawal(amount) {
      this.balance -= amount;
    }
  }, {
    key: "printInfo",
    value: function printInfo() {
      console.log(this.owner + " | $" + this.balance);
    }
  }]);

  return BankAccount;
}();