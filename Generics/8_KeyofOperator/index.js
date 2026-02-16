"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    _objects = [];
    add(obj) {
        this._objects.push(obj);
    }
    // T is Product
    //keyof T => 'name' | 'price'
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: 'a', price: 1 });
store.find('name', 'a');
store.find('name', 1);
// use key of operator to catch problem
// store.find('noExistingProperty', 1);
//# sourceMappingURL=index.js.map