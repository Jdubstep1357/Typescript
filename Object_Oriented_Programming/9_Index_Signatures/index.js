"use strict";
// We can use properties to object dynamically
Object.defineProperty(exports, "__esModule", { value: true });
// trying to figure out who sits where
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Mary';
seats['A1'] = 'John';
seats.A2 = 'Carrie';
//# sourceMappingURL=index.js.map