import { Observable, PartialObserver, Subscribable, Subscription } from "rxjs";
/**
 * State store, manages state (notifies about changes, modifies current state).
 */
export interface StoreInterface<T> extends Subscribable<T> {
    /**
     * Get observable.
     */
    observer: Observable<T>;
    /**
     * Select slice of state.
     */
    select(selector: (state: T | null) => void): Observable<T>;
    /**
     * Get current state.
     */
    snapshot(): T | null;
    /**
     * Set state.
     */
    set(state: T): void;
    /**
     * Patch state.
     */
    patch(state: Partial<T>): void;
    /**
     * Notify observers about error.
     */
    error(err: any): void;
    /**
     * Subscribe to state change.
     */
    subscribe(next?: PartialObserver<T> | ((value: T) => void)): Subscription;
}
