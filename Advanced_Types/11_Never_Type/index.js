"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// use unknown instead of any due to compiler checks to see if methods called exist on target object
function render(document) {
    // Narrowing type of object
    if (typeof document instanceof WordDocument) {
        document.toUpperCase();
    }
    document.move();
    document.fly();
    document.anythinggoes();
}
//# sourceMappingURL=index.js.map