import { ComponentInterface } from '@stencil/core';
import { Deferred }           from '../utils/deferred';
import { Request }            from '../utils/request';

const metadataRegistryKey = '@runopencode:state:consume:requests';

/**
 * Consume decorator, denotes state store which has to be provided to property.
 *
 * @param {string} name Name of the store to consume.
 */
export function Consume(name: string): any {

    return function decoratorFactory(target: Object, propertyKey: string) {
        let metadata: Metadata[] = Reflect.getMetadata(metadataRegistryKey, target) || [];
        let descriptor           = new Metadata(name, propertyKey);
        let field                = `__${propertyKey}__`;

        metadata.push(descriptor);
        Reflect.defineMetadata(metadataRegistryKey, metadata, target);

        delete target.constructor.prototype[propertyKey];

        Object.defineProperty(target.constructor.prototype, propertyKey, {
            configurable: true,
            enumerable:   true,
            get:          function () {
                if (!this[field]) {
                    Object.defineProperty(this, field, {
                        value:      new Deferred(),
                        enumerable: false,
                        writable:   false,
                    });
                }

                return this[field];
            },
        });
    }
}

/**
 * Get all requests for state stores by given component instance.
 */
export function getStoreRequests(instance: ComponentInterface): Request[] {
    let requests: Request[]  = [];
    let metadata: Metadata[] = Reflect.getMetadata(metadataRegistryKey, instance);

    metadata.forEach((metadata: Metadata) => {
        let request = new Request(
            metadata.name,
            metadata.property,
            instance,
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
     * Name of property for which decorator is attached.
     */
    private readonly _property: string;

    constructor(name: string, property: string) {
        this._name     = name;
        this._property = property;
    }

    public get name(): string {
        return this._name;
    }

    public get property(): string {
        return this._property;
    }
}
