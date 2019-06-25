import { StoreInterface } from "../store/store.interface";
/**
 * Request for store emitted by consumer.
 */
export declare class Request {
    /**
     * Name of the store.
     */
    private readonly _name;
    /**
     * Reference to consuming component.
     */
    private readonly _consumer;
    /**
     * Property which will accept store.
     */
    private readonly _property;
    /**
     * Callback which will be invoked after store is provided.
     */
    private readonly _method;
    /**
     * If store can be provided, callback will be invoked.
     */
    private readonly _callback;
    constructor(name: string, consumer: any, property: string | null, method: ((store?: StoreInterface<any>) => void) | null, callback: ((store?: StoreInterface<any>) => void) | null);
    readonly name: string;
    readonly consumer: any;
    readonly property: string | null;
    readonly method: ((store?: StoreInterface<any>) => void) | null;
    readonly callback: ((store?: StoreInterface<any>) => void) | null;
}
