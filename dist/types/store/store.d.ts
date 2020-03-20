import { Subscription, PartialObserver, Observable } from "rxjs";
import { StoreInterface } from "./store.interface";
/**
 * Default store implementation
 */
export declare class Store<T> implements StoreInterface<T> {
    /**
     * Current state.
     */
    private _snapshot;
    /**
     * State stream.
     */
    private _subject;
    constructor(state?: T);
    /**
     * @inheritdoc
     */
    get observer(): Observable<T>;
    /**
     * @inheritDoc
     */
    select(selector: (state: T | null) => void): Observable<any>;
    /**
     * @inheritDoc
     */
    snapshot(): T | null;
    /**
     * @inheritDoc
     */
    set(state: T): void;
    /**
     * @inheritDoc
     */
    patch(state: Partial<T>): void;
    /**
     * @inheritDoc
     */
    error(err: any): void;
    /**
     * @inheritDoc
     */
    subscribe(next?: PartialObserver<T> | ((value: T) => void)): Subscription;
}
