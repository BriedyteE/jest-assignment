const account = {
  balance: 500,

  getBalance() {
    return this.balance;
  },

  deposit(amount) {
    if (this.balance < 5000) {
      this.balance = this.balance + amount;
    }
  },

  withdraw(amount) {
    if (this.balance > 0) {
      this.balance = this.balance - amount;
    }
  },
};

console.log(account.getBalance());

module.exports = account;
