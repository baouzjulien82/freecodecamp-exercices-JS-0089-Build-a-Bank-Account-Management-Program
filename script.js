class BankAccount {
  constructor(){
    this.balance = 0;
    this.transactions = [];
    this.deposit = {
      type : deposit,
      amount : 0 
    };
    this.withdraw = {
      type : withdraw,
      amount : 0 
    };
  }
  deposit(depositAmount) {
    if(depositAmount > 0) {
      this.deposit.amount = depositAmount;
      this.transactions.push(this.deposit);
      this.balance = this.balance + depositAmount;
      return `Successfully deposited ${depositAmount}. New balance: ${this.balance}}`
    } else {
      return `Deposit amount must be greater than zero.`
    }
  }
  withdraw(withdrawAmount) {
    if(withdrawAmount > 0 && withdrawAmount <= this.balance) {
      this.withdraw.amount = withdrawAmount;
      this.transactions.push(this.withdraw);
      this.balance = this.balance - withdrawAmount;
      return `Successfully withdrew ${withdrawAmount}}. New balance: ${this.balance}}`
    }
  }
}
