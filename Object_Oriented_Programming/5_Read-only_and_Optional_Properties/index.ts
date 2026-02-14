class Account {
    // need to use constructor to initialize objects
    // can only be changed inside of the constructor and no where else
    readonly id: number;
    owner: string;
    balance: number;
    // optional label for bank account - ? makes it optional
    nickname?: string;

    // constructor - special function inside of class to initialize object
    constructor(id: number, owner: string, balance: number) {
        // only place id can be changed. cannot change if outside of constructor due to readonly
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
