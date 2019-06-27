import {StoreInterface} from "../store/store.interface";
import {Request}        from "../utils/request";

const metadataRegistryKey = Symbol('@runopencode:state:consume:requests');

/**
 * Consume decorator options.
 */
export interface ConsumeOptions {
    /**
     * Name of the required store
     */
    name: string;

    /**
     * Function which has to be invoked after store is provide
     */
    callback?: ((store: StoreInterface<any>) => void) | string | null;
}

/**
 * Consume decorator, denotes state store which has to be provided to property/method.
 */
export function Consume(options: ConsumeOptions): any {

    return function decoratorFactory(target: Object, propertyKey: string, propertyDescriptior: PropertyDescriptor) {

        options                  = {
            ...{callback: null},
            ...(options)
        };
        let metadata: Metadata[] = Reflect.getMetadata(metadataRegistryKey, target) || [];
        let descriptor           = new Metadata(
            options.name,
            propertyKey,
            options.callback,
            propertyDescriptior ? 'method' : 'property'
        );

        metadata.push(descriptor);
        Reflect.defineMetadata(metadataRegistryKey, metadata, target);
    }
}

/**
 * Get all requests for state stores by given component instance.
 */
export function getStoreRequests(instance: any): Request[] {
    let requests: Request[]           = [];
    let metadata: Metadata[]          = Reflect.getMetadata(metadataRegistryKey, instance);

    metadata.forEach((metadata: Metadata) => {
        let callback: (() => void) | null = metadata.callback as (() => void) | null;

        if ('string' === typeof metadata.callback) {
            callback = instance[metadata.callback];
        }

        let request = new Request(
            metadata.name,
            instance,
            'property' === metadata.type ? metadata.property : null,
            'method' === metadata.type ? instance[metadata.property] : null,
            callback
        );

        requests.push(request);
    });

    return requests;
}

/**
 * Request metadata provided via decorator.
 */
class Metadata {

    /**
     * Name of requested store.
     */
    private readonly _name: string;

    /**
     * Name of property/method for which decorator is attached.
     */
    private readonly _property: string;

    /**
     * Callback function that needs to be invoked (if any) when store is provided.
     */
    private readonly _callback: ((store: StoreInterface<any>) => void) | string | null;

    /**
     * Denotes if decorator decorates property or method.
     */
    private readonly _type: 'property' | 'method';

    constructor(name: string, property: string, callback: ((store: StoreInterface<any>) => void) | string | null, type: 'property' | 'method') {
        this._name     = name;
        this._property = property;
        this._callback = callback;
        this._type     = type;
    }

    public get name(): string {
        return this._name;
    }

    public get property(): string {
        return this._property;
    }

    public get callback(): ((store: StoreInterface<any>) => void) | string | null {
        return this._callback;
    }

    public get type(): "property" | "method" {
        return this._type;
    }
}
