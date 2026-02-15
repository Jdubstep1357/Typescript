/*
// Polymorphism -  Many forms
// refers to objects taking many different forms
*/


/* Open Closed Principle:
-- Classes should be open for extension and closed for modification

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


class Principal extends Person {
    override get fullName() {
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

function printNames(people: Person[]) {
    // person is of object Person
    // each iteration has different form
    // print names 1) student 2) teacher
    // fullName gets 2 different forms
    for (let person of people)
        console.log(person.fullName);
        
}