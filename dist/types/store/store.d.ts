import { Subscription, PartialObserver, Observable } from "rxjs";
import { StoreInterface } from "./store.interface";
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
     * Set current state.
     */
    set(state: T): void;
    /**
     * Patch current state.
     */
    patch(state: Partial<T>): void;
    /**
     * Select a slice of data from store.
     */
    select(selector: (state: T | null) => void): Observable<any>;
    /**
     * Get current state.
     */
    snapshot(): T | null;
    /**
     * Subscribe to state.
     */
    subscribe(next?: PartialObserver<T> | ((value: T) => void)): Subscription;
}
