"use strict";
/* Access Modifyers
3 Types:
1) Public
2) Private
3) Protected
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    _balance;
    nickname;
    // constructor - special function inside of class to initialize object
    // Parameter properties
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
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
    // GETTER - method inside of class for getting value of property
    get balance() {
        return this._balance;
    }
    // SETTER - sets value of property - good for validation
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance = value;
    }
}
let account = new Account(1, 'Mosh', 0);
// balance comes up from top
console.log(account.balance);
account.balance = 1;
//# sourceMappingURL=index.js.map