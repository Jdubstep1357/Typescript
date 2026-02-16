type ComponentOptions = {
    selector: string;
}

// Decorator Factory - Acts as factory for creating a decorator
function Component(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        }
    }
    
}

@Component({ selector: '#my-profile' })
class ProfileComponent {
}