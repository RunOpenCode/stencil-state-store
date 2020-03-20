import { Store } from '../store/store';
const storesRegistryKey = '@runopencode:state:provide:registry';
/**
 * Provide decorator, denotes state store that is available for consumption.
 */
export function Provide(options) {
    return function decoratorFactory(target, propertyKey) {
        options = Object.assign({ defaults: null }, (options));
        let field = `__${propertyKey}__`;
        delete target.constructor.prototype[propertyKey];
        Object.defineProperty(target.constructor.prototype, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                if (!this[field]) {
                    Object.defineProperty(this, field, {
                        value: new Store(options.defaults),
                        enumerable: false,
                        writable: false,
                    });
                }
                return this[field];
            },
        });
        let registeredStores = Reflect.getMetadata(storesRegistryKey, target) || new Map();
        registeredStores.set(options.name, propertyKey);
        Reflect.defineMetadata(storesRegistryKey, registeredStores, target);
    };
}
/**
 * Get all state stores provided by component instance.
 */
export function getRegisteredStores(instance) {
    let registry = Reflect.getMetadata(storesRegistryKey, instance);
    let result = new Map();
    registry.forEach(function (value, key) {
        result.set(key, instance[value]);
    });
    return result;
}
