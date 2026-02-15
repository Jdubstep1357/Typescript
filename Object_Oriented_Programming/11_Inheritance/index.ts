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

class Person {
    constructor(public firstName: string, public lastname: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastname;
    }

    walk() {
        console.log('walking');
    }
}

// extends tells class Students to inherit everythign from Person
class Students extends Person {
    // public only references studentId which is unique to class Students
    // use super to reference constructor of base / parent class
    constructor(public studentId: number, firstName: string, lastName: string) {
        // super class
        super(firstName, lastName);
    }

    takeTest() {
        console.log('Taking test');
        
    }
}

let student = new Students(1, 'John', 'doe@gmail.com');
// this is some text