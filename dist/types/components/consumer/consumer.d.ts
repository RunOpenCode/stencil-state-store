import { EventEmitter } from "../../stencil.core";
export declare class Consumer {
    /**
     * Consuming component.
     */
    consumer: any;
    /**
     * Request for store event.
     */
    request: EventEmitter;
    /**
     * List of all requested stores.
     */
    private requests;
    /**
     * Subscription to provider Registry.
     */
    private subscription;
    /**
     * When consumer is added to DOM, stores are required from provider(s).
     *
     * If there are no requested stores available, subscribe to a registry and
     * wait until provider is available.
     */
    connectedCallback(): void;
    /**
     * When consumer is removed from DOM, unsubscribe from the registry
     * and clear any remaining store requests from list.
     */
    disconnectedCallback(): void;
    render(): any;
    /**
     * For each request for store from the list,
     * fire request event which will bubble up to the provider,
     * if provider is available.
     */
    private require;
}
