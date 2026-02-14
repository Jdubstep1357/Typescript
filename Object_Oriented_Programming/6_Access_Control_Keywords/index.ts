/* Access Modifyers
3 Types:
1) Public
2) Private
3 Protected


*/

class Account {

    readonly id: number;
    owner: string;
    // private - makes it only accessible inside class
    // prefix private property with _
    private _balance: number;
    nickname?: string;

    // constructor - special function inside of class to initialize object
    constructor(id: number, owner: string, balance: number) {
        // only place id can be changed. cannot change if outside of constructor due to readonly
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number) : void {
        if (amount < 0)
            throw new Error('invalid command');
        // Record a transaction
        this._balance += amount;
    }

    // will not show function when using a.METHODSSHOWNHERE
    private calculateTax() {

    }

    getBalance(): number {
        return this._balance;
    }
}

let account = new Account(1, 'Mosh', 0);
// WILL NOT WORK due to balance private
// account.balance = -1;

// shows account balance
console.log(account.getBalance());