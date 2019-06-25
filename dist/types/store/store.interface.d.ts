import { Observable, PartialObserver, Subscribable, Subscription } from "rxjs";
export interface StoreInterface<T> extends Subscribable<T> {
    /**
     * Set state.
     */
    set(state: T): void;
    /**
     * Patch state.
     */
    patch(state: T): void;
    /**
     * Select slice of state.
     */
    select(selector: (state: T | null) => void): Observable<any>;
    /**
     * Get current state.
     */
    snapshot(): T | null;
    /**
     * Subscribe to state change.
     */
    subscribe(next?: PartialObserver<T> | ((value: T) => void)): Subscription;
}
