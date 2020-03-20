/**
 * Deferred/promise object through which store will be provided.
 */
export class Deferred<T> implements Promise<T> {

    private readonly _promise: Promise<T>;

    private _resolve: (value?: T | PromiseLike<T>) => void;

    private _reject: (reason?: any) => void;

    constructor() {
        this._promise = new Promise<T>((resolve, reject) => {
            this._resolve = resolve;
            this._reject  = reject;
        })
    }

    public resolve = (value?: T | PromiseLike<T>): void => {
        this._resolve(value);
    };

    public reject = (reason?: any): void => {
        this._reject(reason);
    };

    public then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
        return this._promise.then(onfulfilled, onrejected)
    }

    public catch<TResult = never>(onrejected?: ((reason: any) => (PromiseLike<TResult> | TResult)) | undefined | null): Promise<T | TResult> {
        return this._promise.catch(onrejected)
    }

    public finally(onfinally?: (() => void) | undefined | null): Promise<T> {
        return this._promise.finally(onfinally);
    }

    [Symbol.toStringTag]: 'Promise'
}
