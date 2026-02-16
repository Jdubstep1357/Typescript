"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    // can use interface Person and use name:string instead of class
    // name: string
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
echo(new Customer('a'));
//# sourceMappingURL=index.js.map