import {BehaviorSubject, Subscription, PartialObserver, Observable} from "rxjs";
import {map}                                                        from "rxjs/operators";
import {StoreInterface}                                             from "./store.interface";

export class Store<T> implements StoreInterface<T> {

    /**
     * Current state.
     */
    private _snapshot: T | null;

    /**
     * State stream.
     */
    private _subject: BehaviorSubject<T>;

    public constructor(state: T = null) {
        this._snapshot = state;
        this._subject  = new BehaviorSubject<T>(state)
    }

    /**
     * Set current state.
     */
    public set(state: T): void {
        this._snapshot = state;
        this._subject.next(state);
    }

    /**
     * Patch current state.
     */
    public patch(state: T): void {
        this._snapshot = {
            ...(this._snapshot || {}),
            ...state
        };

        this._subject.next(this._snapshot);
    }

    /**
     * Select a slice of data from store.
     */
    public select(selector: (state: T | null) => void): Observable<any> {
        return this._subject.pipe(
            map(selector)
        );
    }

    /**
     * Get current state.
     */
    public snapshot(): T | null {
        return this._snapshot;
    }

    /**
     * Subscribe to state.
     */
    public subscribe(next?: PartialObserver<T> | ((value: T) => void)): Subscription {
        return this._subject.subscribe(next as any);
    }
}
