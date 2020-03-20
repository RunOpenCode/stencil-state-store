import { ComponentInterface } from '@stencil/core';

/**
 * Request for state store emitted by consumer.
 */
export class Request {

    /**
     * Name of the store.
     */
    private readonly _name: string;

    /**
     * Property which will accept store.
     */
    private readonly _property: string;

    /**
     * Reference to consuming component.
     */
    private readonly _consumer: ComponentInterface;

    constructor(
        name: string,
        property: string,
        consumer: ComponentInterface,
    ) {
        this._name     = name;
        this._property = property;
        this._consumer = consumer;
    }

    public get name(): string {
        return this._name;
    }

    public get consumer(): any {
        return this._consumer;
    }

    public get property(): string | null {
        return this._property;
    }
}
