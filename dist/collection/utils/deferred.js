/**
 * Deferred/promise object through which store will be provided.
 */
export class Deferred {
    constructor() {
        this.resolve = (value) => {
            this._resolve(value);
        };
        this.reject = (reason) => {
            this._reject(reason);
        };
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    then(onfulfilled, onrejected) {
        return this._promise.then(onfulfilled, onrejected);
    }
    catch(onrejected) {
        return this._promise.catch(onrejected);
    }
    finally(onfinally) {
        return this._promise.finally(onfinally);
    }
}
