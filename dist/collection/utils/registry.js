import { Subject } from "rxjs";
export class Registry {
    constructor() {
        this._subject = new Subject();
        document.addEventListener('@runopencode:store:provider:register', this.onProviderRegistered.bind(this));
    }
    subscribe(next) {
        return this._subject.subscribe(next);
    }
    onProviderRegistered() {
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
