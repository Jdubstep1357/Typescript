"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Old way
const small = 1;
const medium = 2;
const large = 3;
// New Way - Enum - PascalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 4] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map