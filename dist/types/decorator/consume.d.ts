import { StoreInterface } from "../store/store.interface";
import { Request } from "../utils/request";
export declare function Consume(options: ConsumeOptions): any;
export interface ConsumeOptions {
    name: string;
    callback?: ((store: StoreInterface<any>) => void) | string | null;
}
export declare function getStoreRequests(instance: any): Request[];
