

class Person {
    constructor(public firstName: string, public lastname: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastname;
    }

    // similar to privte, whereby only accessible inside of class
    // protected members are inherited, but private members are not
    protected walk() {
        console.log('walking');
    }
}

class Students extends Person {

    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        // will only be inherited from protected. if private, will not work
        this.walk;
        console.log('Taking test');
        
    }
}

class Teacher extends Person {
    override get fullName() {
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

    for (let person of people)
        console.log(person.fullName);
        
}