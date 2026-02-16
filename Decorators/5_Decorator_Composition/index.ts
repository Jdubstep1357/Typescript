type ComponentOptions = {
    selector: string;
}


function Component(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        }
    }
}


function Pipe(constructor: Function) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true; 
}

@Component({ selector: '#my-profile' })
@Pipe 

// Output:
// 1) Pipe decorator called
// 2) Component decorator called
// reason Pipe called first: f(x(g)) 

class ProfileComponent {

}