import { Request } from "../utils/request";
const metadataRegistryKey = Symbol('@runopencode:state:consume:requests');
export function Consume(options) {
    return function (target, propertyKey, propertyDescriptior) {
        options = Object.assign({ callback: null }, (options));
        let metadata = Reflect.getMetadata(metadataRegistryKey, target) || [];
        let descriptor = new Metadata(options.name, propertyKey, options.callback, propertyDescriptior ? 'method' : 'property');
        metadata.push(descriptor);
        Reflect.defineMetadata(metadataRegistryKey, metadata, target);
    };
}
export function getStoreRequests(instance) {
    let requests = [];
    let metadata = Reflect.getMetadata(metadataRegistryKey, instance);
    metadata.forEach((metadata) => {
        let callback = metadata.callback;
        if ('string' === typeof metadata.callback) {
            callback = instance[metadata.callback];
        }
        let request = new Request(metadata.name, instance, 'property' === metadata.type ? metadata.property : null, 'method' === metadata.type ? instance[metadata.property] : null, callback);
        requests.push(request);
    });
    return requests;
}
class Metadata {
    constructor(name, property, callback, type) {
        this._name = name;
        this._property = property;
        this._callback = callback;
        this._type = type;
    }
    get name() {
        return this._name;
    }
    get property() {
        return this._property;
    }
    get callback() {
        return this._callback;
    }
    get type() {
        return this._type;
    }
}
