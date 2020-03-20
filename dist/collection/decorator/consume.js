import { Deferred } from '../utils/deferred';
import { Request } from '../utils/request';
const metadataRegistryKey = '@runopencode:state:consume:requests';
/**
 * Consume decorator, denotes state store which has to be provided to property.
 *
 * @param {string} name Name of the store to consume.
 */
export function Consume(name) {
    return function decoratorFactory(target, propertyKey) {
        let metadata = Reflect.getMetadata(metadataRegistryKey, target) || [];
        let descriptor = new Metadata(name, propertyKey);
        let field = `__${propertyKey}__`;
        metadata.push(descriptor);
        Reflect.defineMetadata(metadataRegistryKey, metadata, target);
        delete target.constructor.prototype[propertyKey];
        Object.defineProperty(target.constructor.prototype, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                if (!this[field]) {
                    Object.defineProperty(this, field, {
                        value: new Deferred(),
                        enumerable: false,
                        writable: false,
                    });
                }
                return this[field];
            },
        });
    };
}
/**
 * Get all requests for state stores by given component instance.
 */
export function getStoreRequests(instance) {
    let requests = [];
    let metadata = Reflect.getMetadata(metadataRegistryKey, instance);
    metadata.forEach((metadata) => {
        let request = new Request(metadata.name, metadata.property, instance);
        requests.push(request);
    });
    return requests;
}
/**
 * Request metadata provided via decorator.
 */
class Metadata {
    constructor(name, property) {
        this._name = name;
        this._property = property;
    }
    get name() {
        return this._name;
    }
    get property() {
        return this._property;
    }
}
