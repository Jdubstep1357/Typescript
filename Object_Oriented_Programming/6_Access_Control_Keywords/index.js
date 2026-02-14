"use strict";
/* Access Modifyers
3 Types:
1) Public
2) Private
3 Protected


*/
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    // private - makes it only accessible inside class
    // prefix private property with _
    _balance;
    nickname;
    // constructor - special function inside of class to initialize object
    constructor(id, owner, balance) {
        // only place id can be changed. cannot change if outside of constructor due to readonly
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('invalid command');
        // Record a transaction
        this._balance += amount;
    }
    // will not show function when using a.METHODSSHOWNHERE
    calculateTax() {
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Mosh', 0);
// WILL NOT WORK due to balance private
// account.balance = -1;
// shows account balance
console.log(account.getBalance());
//# sourceMappingURL=index.js.map