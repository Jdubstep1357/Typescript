class Person {
    // can use interface Person and use name:string instead of class
    // name: string
    constructor(public name: string) {}
}

class Customer extends Person {

}

function echo<T extends Person>(value: T): T {
    return value;
}

echo(new Customer('a'));