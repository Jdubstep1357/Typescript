// Class - Blueprint for creating objects

/* Class Example - Bank Account
Properties: id, owner, balace
Methods: Depost(), Withdraw()
*/

class Account {
    // need to use constructor to initialize objects
    id: number;
    owner: string;
    balance: number;

    // constructor - special function inside of class to initialize object
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number) : void {
        if (amount < 0)
            throw new Error('invalid command');
        this.balance += amount;
    }
}

// new - create new object from existing class
let account = new Account(1, 'Mosh', 0);
account.deposit(100);
// output: 100
console.log(account.balance);

// output: object
console.log(typeof account);

// output: true
console.log(account instanceof Account);