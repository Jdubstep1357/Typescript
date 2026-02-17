// changes name of imported variable
import { Circle as MyCircle, Square } from './shapes';

let circle = new Circle(1);
console.log(circle.radius);

// ctrl over Product click move to other file
interface Product {
    name: string
}