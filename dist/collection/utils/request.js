/**
 * Request for store emitted by consumer.
 */
export class Request {
    constructor(name, consumer, property, method, callback) {
        this._name = name;
        this._consumer = consumer;
        this._property = property;
        this._method = method;
        this._callback = callback;
    }
    get name() {
        return this._name;
    }
    get consumer() {
        return this._consumer;
    }
    get property() {
        return this._property;
    }
    get method() {
        return this._method;
    }
    get callback() {
        return this._callback;
    }
}
