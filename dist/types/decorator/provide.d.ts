import { StoreInterface } from "../store/store.interface";
export declare function Provide(options: ProvideOptions): (target: any, propertyKey: string) => void;
export declare function getRegisteredStores(instance: any): Map<string, StoreInterface<any>>;
export interface ProvideOptions {
    name: string;
    defaults: {
        [key: string]: any;
    };
}
