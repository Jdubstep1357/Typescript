"use strict";
// union - give variable or function parameter more than one type
Object.defineProperty(exports, "__esModule", { value: true });
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=index.js.map