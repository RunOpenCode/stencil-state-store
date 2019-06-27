import {StoreInterface} from "../store/store.interface";

/**
 * Request for state store emitted by consumer.
 */
export class Request {

    /**
     * Name of the store.
     */
    private readonly _name: string;

    /**
     * Reference to consuming component.
     */
    private readonly _consumer: any;

    /**
     * Property which will accept store.
     */
    private readonly _property: string | null;

    /**
     * Method which will accept store.
     */
    private readonly _method: ((store?: StoreInterface<any>) => void) | null;

    /**
     * Callback which will be invoked after store is provided.
     */
    private readonly _callback: ((store?: StoreInterface<any>) => void) | null;

    constructor(
        name: string,
        consumer: any,
        property: string | null,
        method: ((store?: StoreInterface<any>) => void) | null,
        callback: ((store?: StoreInterface<any>) => void) | null
    ) {
        this._name     = name;
        this._consumer = consumer;
        this._property = property;
        this._method   = method;
        this._callback = callback;
    }

    public get name(): string {
        return this._name;
    }

    public get consumer(): any {
        return this._consumer;
    }

    public get property(): string | null {
        return this._property;
    }

    public get method(): ((store?: StoreInterface<any>) => void) | null {
        return this._method;
    }

    public get callback(): ((store?: StoreInterface<any>) => void) | null {
        return this._callback;
    }
}
