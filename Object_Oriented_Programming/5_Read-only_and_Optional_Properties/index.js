"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    // need to use constructor to initialize objects
    // can only be changed inside of the constructor and no where else
    id;
    owner;
    balance;
    // optional label for bank account - ? makes it optional
    nickname;
    // constructor - special function inside of class to initialize object
    constructor(id, owner, balance) {
        // only place id can be changed. cannot change if outside of constructor due to readonly
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
//# sourceMappingURL=index.js.map