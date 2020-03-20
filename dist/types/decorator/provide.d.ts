import { ComponentInterface } from '@stencil/core';
import { StoreInterface } from '../store/store.interface';
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
    defaults: {
        [key: string]: any;
    } | null;
}
/**
 * Provide decorator, denotes state store that is available for consumption.
 */
export declare function Provide(options: ProvideOptions): (target: ComponentInterface, propertyKey: string) => void;
/**
 * Get all state stores provided by component instance.
 */
export declare function getRegisteredStores(instance: any): Map<string, StoreInterface<any>>;
