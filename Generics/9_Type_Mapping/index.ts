// Base a type on another type - type mapping

interface Product {
    name: string;
    price: number;
}

// create a new type based on existing type

type ReadOnly<T> = {
    // Index signature
    // keyofOperator
    // 1st iteration reads name, 2nd iteration reads price
    // if properties product of property returns string. if product is price, it will return number
    // K refers to keys of Product
    readonly [K in keyof T]: T[K]
}

// makes property optional
type Optional<T> = {
    [K in keyof T]?: T[K]
}

// nullable
type Nullable<T> = {
    [K in keyof T]?: null
}

// all properties are going to be readable
let product: ReadOnly<Product> = {
    name: 'a',
    price: 1
};

// Product is readonly
// product.name = 'a';