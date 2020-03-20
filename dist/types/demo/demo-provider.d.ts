import { ComponentInterface, h } from '@stencil/core';
export declare class DemoProvider implements ComponentInterface {
    private store;
    private subscription;
    private counter;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private increase;
    render(): h.JSX.IntrinsicElements;
}
