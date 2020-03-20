/**
 * Request for state store emitted by consumer.
 */
export class Request {
    constructor(name, property, consumer) {
        this._name = name;
        this._property = property;
        this._consumer = consumer;
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
}
