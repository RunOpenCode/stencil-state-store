import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
export class Store {
    constructor(state = null) {
        this._snapshot = state;
        this._subject = new BehaviorSubject(state);
    }
    /**
     * Set current state.
     */
    set(state) {
        this._snapshot = state;
        this._subject.next(state);
    }
    /**
     * Patch current state.
     */
    patch(state) {
        this._snapshot = Object.assign({}, (this._snapshot || {}), state);
        this._subject.next(this._snapshot);
    }
    /**
     * Select a slice of data from store.
     */
    select(selector) {
        return this._subject.pipe(map(selector));
    }
    /**
     * Get current state.
     */
    snapshot() {
        return this._snapshot;
    }
    /**
     * Subscribe to state.
     */
    subscribe(next) {
        return this._subject.subscribe(next);
    }
}
