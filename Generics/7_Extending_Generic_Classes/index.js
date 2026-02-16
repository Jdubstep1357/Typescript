"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    _objects = [];
    add(obj) {
        this._objects.push(obj);
    }
}
// Pass on generic type parameter
// has to use <T> for argument with Store<T>
class CompressibleStore extends Store {
    compress() { }
}
// Restrict the generic type parameter
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
// Fix generic type parameter
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
/* When extending generic class:
1) fix generic parameter
2) restrict it
3) pass it on to child class */ 
//# sourceMappingURL=index.js.map