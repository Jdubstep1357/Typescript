class ArrayUtils {
    // inside classes don't use function just ignore it
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

let numbers = ArrayUtils.wrapInArray(1);