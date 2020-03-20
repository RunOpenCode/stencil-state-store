import { Subject } from "rxjs";
/**
 * Registry deals with the issue of nondeterministic order
 * of rendering each individual component, regardless
 * of hierarchical position in DOM tree (parent, child).
 */
export class Registry {
    constructor() {
        /**
         * Observable subject which notifies about new provider.
         */
        this._subject = new Subject();
    }
    /**
     * Subscribe for provider registration event.
     */
    subscribe(next) {
        return this._subject.subscribe(next);
    }
    /**
     * Notify subscribers that new provider has been attached to DOM
     */
    notify() {
        this._subject.next();
    }
    /**
     * Singleton implementation
     */
    static getInstance() {
        if (!Registry._instance) {
            Registry._instance = new Registry();
        }
        return Registry._instance;
    }
}
