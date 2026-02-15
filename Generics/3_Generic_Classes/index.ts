// <> is generic class
// <T> in C++ is template classes

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair('1', 'a');
