import { StoreInterface } from "../store/store.interface";
import { Request } from "../utils/request";
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
export declare function Consume(options: ConsumeOptions): any;
/**
 * Get all requests for state stores by given component instance.
 */
export declare function getStoreRequests(instance: any): Request[];
