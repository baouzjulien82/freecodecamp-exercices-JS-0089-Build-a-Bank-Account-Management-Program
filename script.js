// Définition d'une classe BankAccount
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // fonction de dépôt d'argent
  deposit(depositAmount) {
    if (depositAmount > 0) {
      this.balance += depositAmount;
      this.transactions.push({ type: "deposit", amount: depositAmount });
      return `Successfully deposited $${depositAmount}. New balance: $${this.balance}`;
    } else {
      return `Deposit amount must be greater than zero.`;
    }
  }

  // fonction de retrait d'argent
  withdraw(withdrawAmount) {
    if (withdrawAmount > 0 && withdrawAmount <= this.balance) {
      this.balance -= withdrawAmount;
      this.transactions.push({ type: "withdraw", amount: withdrawAmount });
      return `Successfully withdrew $${withdrawAmount}. New balance: $${this.balance}`;
    } else {
      return `Insufficient balance or invalid amount.`;
    }
  }

  // fonction d'affichage du solde du compte
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // fonction d'affichage des dépôts
  listAllDeposits() {
    const depositArray = this.transactions.filter(t => t.type === "deposit");
    return "Deposits: " + depositArray.map(t => t.amount).join(",");
  }

  // fonction d'affichage des retraits
  listAllWithdrawals() {
    const withdrawArray = this.transactions.filter(t => t.type === "withdraw");
    return "Withdrawals: " + withdrawArray.map(t => t.amount).join(",");
  }
}

// --- Test ---
const myAccount = new BankAccount();

myAccount.deposit(100);
myAccount.deposit(100);
myAccount.withdraw(20);
myAccount.withdraw(20);
myAccount.deposit(100);

console.log(myAccount.checkBalance());       // Balance > 100
console.log(myAccount.listAllDeposits());    // Liste des dépôts
console.log(myAccount.listAllWithdrawals()); // Liste des retraits
