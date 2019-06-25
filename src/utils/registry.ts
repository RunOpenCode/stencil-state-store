import {Subject, Subscription} from "rxjs";

export class Registry {

    private static _instance: Registry;

    private readonly _subject: Subject<void> = new Subject<void>();

    private constructor() {
        document.addEventListener('@runopencode:store:provider:register', this.onProviderRegistered.bind(this));
    }

    public subscribe(next: (() => void)): Subscription {
        return this._subject.subscribe(next as any);
    }

    private onProviderRegistered(): void {
        this._subject.next();
    }

    /**
     * Singleton implementation
     */
    public static getInstance(): Registry {
        if (!Registry._instance) {
            Registry._instance = new Registry();
        }

        return Registry._instance;
    }
}
