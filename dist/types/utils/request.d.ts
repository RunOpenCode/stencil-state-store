import { ComponentInterface } from '@stencil/core';
/**
 * Request for state store emitted by consumer.
 */
export declare class Request {
    /**
     * Name of the store.
     */
    private readonly _name;
    /**
     * Property which will accept store.
     */
    private readonly _property;
    /**
     * Reference to consuming component.
     */
    private readonly _consumer;
    constructor(name: string, property: string, consumer: ComponentInterface);
    get name(): string;
    get consumer(): any;
    get property(): string | null;
}
