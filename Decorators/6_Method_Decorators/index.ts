// 1st parameter - object that owns target method
// 2nd parameter - name of target method

// Every property on object in an object has a descriptor object that describes that property
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    // ... allows muiltiple parameters to be passed in
    descriptor.value = function(...args: any) {
        console.log('Before');

        // original method
        original.call(this, ...args);

        console.log('Before');

        
    }
}

class Person {
    // decorator
    @Log
    say(message: string) {
        console.log('Person says ' + message);
    }
}

let person = new Person();
person.say('Hello');