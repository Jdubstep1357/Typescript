"use strict";
/*
Student
Properties - FName, LName, FullName
Methods - Walk(), Talk()

Teacher
Properties - FName, LName, FullName
Methods - Walk(), Talk()

Both Student and Teacher have same properties and methods
better to have inheritance than writing code twice

Have parent class Person

*/
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
    walk() {
        console.log('walking');
    }
}
// extends tells class Students to inherit everythign from Person
class Students extends Person {
    studentId;
    // public only references studentId which is unique to class Students
    // use super to reference constructor of base / parent class
    constructor(studentId, firstName, lastName) {
        // super class
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking test');
    }
}
let student = new Students(1, 'John', 'doe@gmail.com');
// this is some text
//# sourceMappingURL=index.js.map