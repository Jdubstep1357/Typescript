interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

// Pass on generic type parameter
// has to use <T> for argument with Store<T>
class CompressibleStore<T> extends Store<T> {
    compress() {}
}


// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}


// Fix generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}


/* When extending generic class:
1) fix generic parameter
2) restrict it 
3) pass it on to child class */