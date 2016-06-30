'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckingAccount = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BankAccount2 = require('./BankAccount');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckingAccount = exports.CheckingAccount = function (_BankAccount) {
  _inherits(CheckingAccount, _BankAccount);

  function CheckingAccount(name) {
    _classCallCheck(this, CheckingAccount);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckingAccount).call(this, name));

    _this.insufficientFundsFee = 40;
    return _this;
  }

  _createClass(CheckingAccount, [{
    key: 'processCheck',
    value: function processCheck(checkToProcess) {}
  }, {
    key: 'withdrawal',
    value: function withdrawal(amount) {
      if (this.balance < amount) {
        console.log('Not enough money, charging an extra: ' + this.insufficientFundsFee);
      }
      this.balance -= amount + this.insufficientFundsFee;
    }
  }]);

  return CheckingAccount;
}(_BankAccount2.BankAccount);