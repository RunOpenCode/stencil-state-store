import { ComponentInterface } from '@stencil/core';
export declare class DemoConsumer implements ComponentInterface {
    prop: string;
    private store;
    private subscription;
    private counter;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    private increase;
    render(): any;
}
