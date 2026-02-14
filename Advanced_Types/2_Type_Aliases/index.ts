// Dry - Dont repeat yourself

// type alias - define shape of object
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
    
}


let employee: Employee = {
        id: 1,
        name: 'Mosh',
        retire: (date: Date) => {
            console.log(date);
        }
    };







