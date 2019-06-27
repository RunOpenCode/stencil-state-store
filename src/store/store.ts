import {BehaviorSubject, Subscription, PartialObserver, Observable} from "rxjs";
import {map}                                                        from "rxjs/operators";
import {StoreInterface}                                             from "./store.interface";

/**
 * Default store implementation
 */
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
     * @inheritdoc
     */
    public get observer(): Observable<T> {
        return this._subject.asObservable();
    }

    /**
     * @inheritDoc
     */
    public select(selector: (state: T | null) => void): Observable<any> {
        return this._subject.pipe(
            map(selector)
        );
    }

    /**
     * @inheritDoc
     */
    public snapshot(): T | null {
        return this._snapshot;
    }

    /**
     * @inheritDoc
     */
    public set(state: T): void {
        this._snapshot = state;
        this._subject.next(state);
    }

    /**
     * @inheritDoc
     */
    public patch(state: Partial<T>): void {
        this._snapshot = {
            ...(this._snapshot || {}),
            ...state
        } as T;

        this._subject.next(this._snapshot);
    }

    /**
     * @inheritDoc
     */
    public error(err: any): void
    {
        this._subject.error(err);
    }

    /**
     * @inheritDoc
     */
    public subscribe(next?: PartialObserver<T> | ((value: T) => void)): Subscription {
        return this._subject.subscribe(next as any);
    }
}
