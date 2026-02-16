"use strict";
// interface for presenting calling one of api end points
Object.defineProperty(exports, "__esModule", { value: true });
function fetch(url) {
    return { data: null, error: null };
}
// swipe out <Product> and <User> interchangibly. But delete data and add . 
// notice how it switches between username and title
let result = fetch('url');
result.data?.title;
//# sourceMappingURL=index.js.map