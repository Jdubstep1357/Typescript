function reject(message: string): never {
    throw new Error(message);
}


// never represents value that never occured

function processEvents(): never {
    // constantly watching event
    while(true) {
        // read message from a queue
    }
}


reject('...');
processEvents();
console.log('Hello World');


