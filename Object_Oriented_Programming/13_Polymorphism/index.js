"use strict";
/*
// Polymorphism -  Many forms
// refers to objects taking many different forms
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* Open Closed Principle:
-- Classes should be open for extension and closed for modification

*/
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
    walk() {
        console.log('walking');
    }
}
class Students extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        // super class
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking test');
    }
}
class Teacher extends Person {
    // override tells compiler changing implementation of method
    get fullName() {
        // super references base class
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
    // person is of object Person
    // each iteration has different form
    // print names 1) student 2) teacher
    // fullName gets 2 different forms
    for (let person of people)
        console.log(person.fullName);
}
//# sourceMappingURL=index.js.map