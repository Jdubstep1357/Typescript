"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ride {
    // when making property static that method becomes part of 
    // a class and will have only a single instance of them in memory
    static _activeRides = 0;
    start() { Ride._activeRides++; }
    ;
    stop() { Ride._activeRides--; }
    ;
    // Getter 
    static get activeRides() {
        return Ride._activeRides;
    }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride1.start();
console.log(Ride.activeRides);
//# sourceMappingURL=index.js.map