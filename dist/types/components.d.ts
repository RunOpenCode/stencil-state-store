/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { ComponentInterface, } from "./stencil-public-runtime";
export namespace Components {
    interface DemoConsumer {
        "prop": string;
    }
    interface DemoProvider {
    }
    interface StateStoreConsumer {
        /**
          * Consuming component.
         */
        "consumer": ComponentInterface;
    }
    interface StateStoreProvider {
        /**
          * Providing component
         */
        "provider": ComponentInterface;
    }
}
declare global {
    interface HTMLDemoConsumerElement extends Components.DemoConsumer, HTMLStencilElement {
    }
    var HTMLDemoConsumerElement: {
        prototype: HTMLDemoConsumerElement;
        new (): HTMLDemoConsumerElement;
    };
    interface HTMLDemoProviderElement extends Components.DemoProvider, HTMLStencilElement {
    }
    var HTMLDemoProviderElement: {
        prototype: HTMLDemoProviderElement;
        new (): HTMLDemoProviderElement;
    };
    interface HTMLStateStoreConsumerElement extends Components.StateStoreConsumer, HTMLStencilElement {
    }
    var HTMLStateStoreConsumerElement: {
        prototype: HTMLStateStoreConsumerElement;
        new (): HTMLStateStoreConsumerElement;
    };
    interface HTMLStateStoreProviderElement extends Components.StateStoreProvider, HTMLStencilElement {
    }
    var HTMLStateStoreProviderElement: {
        prototype: HTMLStateStoreProviderElement;
        new (): HTMLStateStoreProviderElement;
    };
    interface HTMLElementTagNameMap {
        "demo-consumer": HTMLDemoConsumerElement;
        "demo-provider": HTMLDemoProviderElement;
        "state-store-consumer": HTMLStateStoreConsumerElement;
        "state-store-provider": HTMLStateStoreProviderElement;
    }
}
declare namespace LocalJSX {
    interface DemoConsumer {
        "prop"?: string;
    }
    interface DemoProvider {
    }
    interface StateStoreConsumer {
        /**
          * Consuming component.
         */
        "consumer": ComponentInterface;
        /**
          * Request for store event.
         */
        "onStateStoreConsumerRequest"?: (event: CustomEvent<any>) => void;
    }
    interface StateStoreProvider {
        /**
          * Providing component
         */
        "provider": ComponentInterface;
    }
    interface IntrinsicElements {
        "demo-consumer": DemoConsumer;
        "demo-provider": DemoProvider;
        "state-store-consumer": StateStoreConsumer;
        "state-store-provider": StateStoreProvider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "demo-consumer": LocalJSX.DemoConsumer & JSXBase.HTMLAttributes<HTMLDemoConsumerElement>;
            "demo-provider": LocalJSX.DemoProvider & JSXBase.HTMLAttributes<HTMLDemoProviderElement>;
            "state-store-consumer": LocalJSX.StateStoreConsumer & JSXBase.HTMLAttributes<HTMLStateStoreConsumerElement>;
            "state-store-provider": LocalJSX.StateStoreProvider & JSXBase.HTMLAttributes<HTMLStateStoreProviderElement>;
        }
    }
}
