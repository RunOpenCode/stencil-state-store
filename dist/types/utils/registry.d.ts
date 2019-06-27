import { Subscription } from "rxjs";
/**
 * Registry deals with the issue of nondeterministic order
 * of rendering each individual component, regardless
 * of hierarchical position in DOM tree (parent, child).
 */
export declare class Registry {
    /**
     * Global class instance.
     */
    private static _instance;
    /**
     * Observable subject which notifies about new provider.
     */
    private readonly _subject;
    /**
     * Subscribe for provider registration event.
     */
    subscribe(next: (() => void)): Subscription;
    /**
     * Notify subscribers that new provider has been attached to DOM
     */
    notify(): void;
    /**
     * Singleton implementation
     */
    static getInstance(): Registry;
}
