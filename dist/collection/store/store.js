import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
/**
 * Default store implementation
 */
export class Store {
    constructor(state = null) {
        this._snapshot = state;
        this._subject = new BehaviorSubject(state);
    }
    /**
     * @inheritdoc
     */
    get observer() {
        return this._subject.asObservable();
    }
    /**
     * @inheritDoc
     */
    select(selector) {
        return this._subject.pipe(map(selector));
    }
    /**
     * @inheritDoc
     */
    snapshot() {
        return this._snapshot;
    }
    /**
     * @inheritDoc
     */
    set(state) {
        this._snapshot = state;
        this._subject.next(state);
    }
    /**
     * @inheritDoc
     */
    patch(state) {
        this._snapshot = Object.assign(Object.assign({}, (this._snapshot || {})), state);
        this._subject.next(this._snapshot);
    }
    /**
     * @inheritDoc
     */
    error(err) {
        this._subject.error(err);
    }
    /**
     * @inheritDoc
     */
    subscribe(next) {
        return this._subject.subscribe(next);
    }
}
