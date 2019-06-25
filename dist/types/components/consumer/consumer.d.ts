import { EventEmitter } from "../../stencil.core";
export declare class Consumer {
    consumer: any;
    request: EventEmitter;
    private requests;
    private subscription;
    /**
     * When provider is added to DOM, it should be registered in registry.
     */
    connectedCallback(): void;
    /**
     * When provider is removed from DOM, it should be unregistered from registry.
     */
    disconnectedCallback(): void;
    render(): any;
    private require;
}
