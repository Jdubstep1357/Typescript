let speed: number | null = null;

let ride = {
    // Falsey (undefined, null, '', false, 0)
    // if speed truthy use value otherwise use 30

    // Nullish coalescing operator
    // if value is not null or undefined, otherwise use 30 as default value
    speed: speed ?? 30
}