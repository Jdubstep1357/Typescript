"use strict";
// Class - Blueprint for creating objects
Object.defineProperty(exports, "__esModule", { value: true });
/* Class Example - Bank Account
Properties: id, owner, balace
Methods: Depost(), Withdraw()
*/
class Account {
    // need to use constructor to initialize objects
    id;
    owner;
    balance;
    // constructor - special function inside of class to initialize object
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('invalid command');
        this.balance += amount;
    }
}
// new - create new object from existing class
let account = new Account(1, 'Mosh', 0);
account.deposit(100);
console.log(account.balance);
//# sourceMappingURL=index.js.map