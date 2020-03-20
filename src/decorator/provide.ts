import { ComponentInterface } from '@stencil/core';
import { Store }              from '../store/store';
import { StoreInterface }     from '../store/store.interface';

const storesRegistryKey = '@runopencode:state:provide:registry';

/**
 * Provide decorator options.
 */
export interface ProvideOptions {
    /**
     * Name of provided store.
     */
    name: string;

    /**
     * Initial store values.
     */
    defaults: { [key: string]: any } | null;
}

/**
 * Provide decorator, denotes state store that is available for consumption.
 */
export function Provide(options: ProvideOptions) {

    return function decoratorFactory(target: ComponentInterface, propertyKey: string) {

        options   = {
            ...{defaults: null},
            ...(options),
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
                        writable:   false,
                    });
                }

                return this[field];
            },
        });

        let registeredStores: Map<string, string> = Reflect.getMetadata(storesRegistryKey, target) || new Map<string, string>();

        registeredStores.set(options.name, propertyKey);
        Reflect.defineMetadata(storesRegistryKey, registeredStores, target);
    }
}

/**
 * Get all state stores provided by component instance.
 */
export function getRegisteredStores(instance: any): Map<string, StoreInterface<any>> {
    let registry: Map<string, string>            = Reflect.getMetadata(storesRegistryKey, instance);
    let result: Map<string, StoreInterface<any>> = new Map<string, StoreInterface<any>>();

    registry.forEach(function (value: string, key: string) {
        result.set(key, instance[value]);
    });

    return result;
}
