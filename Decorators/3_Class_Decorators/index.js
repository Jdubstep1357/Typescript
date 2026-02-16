"use strict";
// Same as above but different
Object.defineProperty(exports, "__esModule", { value: true });
// class Component {
//     insertDom() {}
// }
// class ProfileComponent extends Component {
// }
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    };
}
@Component
class ProfileComponent {
}
//# sourceMappingURL=index.js.map