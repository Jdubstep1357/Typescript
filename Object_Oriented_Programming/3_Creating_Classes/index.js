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
//# sourceMappingURL=index.js.map