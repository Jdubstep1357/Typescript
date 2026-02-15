// interface for presenting calling one of api end points

interface Result<T> {
    data: T| null,
    error: string | null
}


function fetch<T>(url: string): Result<T> {
    return { data: null, error: null }
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

// swipe out <Product> and <User> interchangibly. But delete data and add . 
// notice how it switches between username and title
let result = fetch<Product>('url');
result.data?.title;
