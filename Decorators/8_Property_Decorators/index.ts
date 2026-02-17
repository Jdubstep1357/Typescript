function MinLength(length: number) {
    // property decorator function
    return (target: any, propertyName: string) => {

        let value: string;

            // property descriptor for target property
            const descriptor: PropertyDescriptor = {
                get() { return value; },
                set(newValue: string) {
                    if (newValue.length < length)
                        // `` are template strings
                        // length is 4
                        throw new Error(`${propertyName} should be at least ${length} characters long`);
                    value = newValue;
                    
                }
            };
                // assign value to target property
                Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {

    // ensures the password is at least 4 characters long
    @MinLength(4)

    password: string;

    constructor(password: string) {
        this.password = password;
    }
}


let user = new User('1234');
console.log(user.password);
// output 1234

let userfake = new User('12');
console.log(user.password);
// output: Throws error

// every time we try to set password, @MinLength gets called to check length