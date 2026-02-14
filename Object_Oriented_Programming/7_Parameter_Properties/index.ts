/* Access Modifyers
3 Types:
1) Public
2) Private
3) Protected
*/

class Account {

    nickname?: string;

    // constructor - special function inside of class to initialize object


    // public - instead of using at id at top, using public
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

    getBalance(): number {
        return this._balance;
    }
}

