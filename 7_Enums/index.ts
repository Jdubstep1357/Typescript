// Old way
const small = 1;
const medium = 2;
const large = 3;

// New Way - Enum - PascalCase
enum Size { Small = 1, Medium = 4, Large = 3 };
let mySize: Size = Size.Medium;
console.log(mySize);