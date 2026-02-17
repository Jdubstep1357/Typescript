function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    // original getter
    descriptor.get = function() {
        // original chainging - can be undefined
        const result = original?.call(this);
        if (typeof result.toUpperCase())
            return (typeof result === 'string') ? result.toUpperCase() : result;
    }
}

class Person {
    constructor(public firstName: string, public lastName: string) {}

    // capitalize return value of getter
    @Capitalize

    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// decorator in action
let person = new Person('mosh', 'hamadi');
// outputs full name
console.log(person.fullName);