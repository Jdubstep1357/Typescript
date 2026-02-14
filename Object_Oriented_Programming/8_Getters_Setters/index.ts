/* Access Modifyers
3 Types:
1) Public
2) Private
3) Protected
*/

class Account {

    nickname?: string;

    // constructor - special function inside of class to initialize object

    // Parameter properties
    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number
        ) {}

    deposit(amount: number) : void {
        if (amount < 0)
            throw new Error('invalid command');
        // Record a transaction
        this._balance += amount;
    }

    // will not show function when using a.METHODSSHOWNHERE
    private calculateTax() {

    }

    // GETTER - method inside of class for getting value of property
    get balance(): number {
        return this._balance;
    }


    // SETTER - sets value of property - good for validation
    set balance(value: number) {
        if (value < 0) 
            throw new Error('Invalid value');
        this._balance = value;
    }
}

let account = new Account(1, 'Mosh', 0);
// balance comes up from top
console.log(account.balance);
account.balance = 1;