import {Subject, Subscription} from "rxjs";

/**
 * Registry deals with the issue of nondeterministic order
 * of rendering each individual component, regardless
 * of hierarchical position in DOM tree (parent, child).
 */
export class Registry {

    /**
     * Global class instance.
     */
    private static _instance: Registry;

    /**
     * Observable subject which notifies about new provider.
     */
    private readonly _subject: Subject<void> = new Subject<void>();

    /**
     * Subscribe for provider registration event.
     */
    public subscribe(next: (() => void)): Subscription {
        return this._subject.subscribe(next as any);
    }

    /**
     * Notify subscribers that new provider has been attached to DOM
     */
    public notify(): void {
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
