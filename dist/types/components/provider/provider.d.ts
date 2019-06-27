export declare class Provider {
    /**
     * Providing component
     */
    provider: any;
    /**
     * Stores available for consumers to be requested.
     */
    private stores;
    /**
     * Get list of registered stores from provider
     * and notify registry that provider is ready for
     * requests.
     */
    connectedCallback(): void;
    /**
     * Listen for store requests.
     */
    onRequest(event: CustomEvent): void;
    render(): any;
}
