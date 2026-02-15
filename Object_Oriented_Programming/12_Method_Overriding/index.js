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
let teacher = new Teacher('John', 'Smith');
// Output: Professor John Smith
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map