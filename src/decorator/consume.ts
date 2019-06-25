import {StoreInterface} from "../store/store.interface";
import {Request}        from "../utils/request";

const metadataRegistryKey = Symbol('@runopencode:state:consume:requests');

export function Consume(options: ConsumeOptions): any {

    return function (target: Object, propertyKey: string, propertyDescriptior: PropertyDescriptor) {

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

export interface ConsumeOptions {
    name: string;
    callback?: ((store: StoreInterface<any>) => void) | string | null;
}

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

class Metadata {

    private readonly _name: string;

    private readonly _property: string;

    private readonly _callback: ((store: StoreInterface<any>) => void) | string | null;

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
