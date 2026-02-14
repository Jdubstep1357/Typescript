// We can use properties to object dynamically

// trying to figure out who sits where
class SeatAssignment {
    // no reason to assign value to every single seat value
    // index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Mary';
seats['A1'] = 'John';
seats.A2 = 'Carrie';