/**
 * Deferred/promise object through which store will be provided.
 */
export declare class Deferred<T> implements Promise<T> {
    private readonly _promise;
    private _resolve;
    private _reject;
    constructor();
    resolve: (value?: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => (PromiseLike<TResult> | TResult)) | undefined | null): Promise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    [Symbol.toStringTag]: 'Promise';
}
