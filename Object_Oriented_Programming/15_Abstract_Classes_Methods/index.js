"use strict";
// abstract tells compiler it's not ready. class Circle has to extend it
// like uncooked meal, not ready
Object.defineProperty(exports, "__esModule", { value: true });
// abstract methods can only appear in abstract classes
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    // void ensures that function cannot return value
    render() {
        console.log('Rendering a circle');
    }
}
//# sourceMappingURL=index.js.map