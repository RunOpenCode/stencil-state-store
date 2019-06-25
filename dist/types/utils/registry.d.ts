import { Subscription } from "rxjs";
export declare class Registry {
    private static _instance;
    private readonly _subject;
    private constructor();
    subscribe(next: (() => void)): Subscription;
    private onProviderRegistered;
    /**
     * Singleton implementation
     */
    static getInstance(): Registry;
}
