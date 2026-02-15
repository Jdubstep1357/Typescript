"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    lastname;
    constructor(firstName, lastname) {
        this.firstName = firstName;
        this.lastname = lastname;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastname;
    }
    // similar to privte, whereby only accessible inside of class
    // protected members are inherited, but private members are not
    walk() {
        console.log('walking');
    }
}
class Students extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        // will only be inherited from protected. if private, will not work
        this.walk;
        console.log('Taking test');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal' + super.fullName;
    }
}
// add student or teacher objects - Polymorphism
printNames([
    new Students(1, 'John', 'Smith'),
    new Teacher('Mosh', 'H'),
    new Principal('Mary', 'Smith')
    // Outpuit: John Smith, Professor Mosh H, Principal Mary Smith
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
//# sourceMappingURL=index.js.map