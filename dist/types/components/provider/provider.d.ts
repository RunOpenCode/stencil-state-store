import { ComponentInterface, h } from '@stencil/core';
export declare class Provider implements ComponentInterface {
    /**
     * Providing component
     */
    provider: ComponentInterface;
    private el;
    /**
     * Stores available for consumers to be requested.
     */
    private stores;
    /**
     * DOM element which listens to a request event.
     */
    private handler;
    /**
     * Get list of registered stores from provider
     * and notify registry that provider is ready for
     * requests.
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onStoreRequested;
    render(): h.JSX.IntrinsicElements;
}
