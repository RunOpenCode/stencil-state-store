import {Store}          from "../store/store";
import {StoreInterface} from "../store/store.interface";

const storesRegistryKey = Symbol('@runopencode:state:provide:registry');

export function Provide(options: ProvideOptions) {

    return function decoratorFactory(target: any, propertyKey: string) {

        options   = {
            ...{defaults: null},
            ...(options)
        };
        let field = `__${propertyKey}__`;

        delete target.constructor.prototype[propertyKey];

        Object.defineProperty(target.constructor.prototype, propertyKey, {
            configurable: true,
            enumerable:   true,
            get:          function () {
                if (!this[field]) {

                    Object.defineProperty(this, field, {
                        value:      new Store(options.defaults),
                        enumerable: false,
                        writable:   false
                    });
                }

                return this[field];
            }
        });

        let registeredStores: Map<string, string> = Reflect.getMetadata(storesRegistryKey, target) || new Map<string, string>();

        registeredStores.set(options.name, propertyKey);
        Reflect.defineMetadata(storesRegistryKey, registeredStores, target);
    }
}

export function getRegisteredStores(instance: any): Map<string, StoreInterface<any>> {
    let registry: Map<string, string>            = Reflect.getMetadata(storesRegistryKey, instance);
    let result: Map<string, StoreInterface<any>> = new Map<string, StoreInterface<any>>();

    registry.forEach(function(value: string, key: string) {
        result.set(key, instance[value]);
    });

    return result;
}

export interface ProvideOptions {
    name: string;
    defaults: { [key: string]: any };
}
