type WatchedParameter = {
    methodName: string,
    parameterIndex: number
};

const watchedParameters: WatchedParameter[] = [];


// framework later on can use metadata to do something

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex
    });
}

class Vehicle {
    move(@Watch speed: number) {}
}

console.log(watchedParameters);
// Output: [ { methodName: 'move', parameterIndex: 0 }]