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

class Students extends Person {

    constructor(public studentId: number, firstName: string, lastName: string) {
        // super class
        super(firstName, lastName);
    }

    takeTest() {
        console.log('Taking test');
        
    }
}

class Teacher extends Person {
    // override tells compiler changing implementation of method
    override get fullName() {
        // super references base class
        return 'Professor ' + super.fullName;
    }
}

let teacher = new Teacher('John', 'Smith');
// Output: Professor John Smith
console.log(teacher.fullName)