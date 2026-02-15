// abstract tells compiler it's not ready. class Circle has to extend it
// like uncooked meal, not ready

// abstract methods can only appear in abstract classes
abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    // void ensures that function cannot return value
    override render(): void {
        console.log('Rendering a circle');
    }
}

