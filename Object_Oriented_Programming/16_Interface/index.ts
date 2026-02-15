// Interfaces
// define shapes of objects

/* 
class Calendars
google, iCal, Outlook
All have similar properties and methods
*/

// abstract class Calendar {
//     constructor(public name: string) {}

//     abstract addEvent(): void; 
//     abstract removeEvent(): void;
// }


// when to use abstract vs interface?
// if parent class doesn't have too much logic, use interface

// tell all our properties to have name property and abstract methods
interface Calendar {
    // describes shape of every object
    name: string,
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

// hover over GoogleCalendar and pr ess ctrl . can implement interface for GoogleCalendar
// class GoogleCalendar implements Calendar {

// }

class GoogleCalendarImplement implements Calendar {
    constructor(public name: string) {}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}