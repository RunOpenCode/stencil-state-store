/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DemoConsumer {
    'prop': string;
  }
  interface DemoProvider {}
  interface StateStoreConsumer {
    'consumer': any;
  }
  interface StateStoreProvider {
    'provider': any;
  }
}

declare global {


  interface HTMLDemoConsumerElement extends Components.DemoConsumer, HTMLStencilElement {}
  var HTMLDemoConsumerElement: {
    prototype: HTMLDemoConsumerElement;
    new (): HTMLDemoConsumerElement;
  };

  interface HTMLDemoProviderElement extends Components.DemoProvider, HTMLStencilElement {}
  var HTMLDemoProviderElement: {
    prototype: HTMLDemoProviderElement;
    new (): HTMLDemoProviderElement;
  };

  interface HTMLStateStoreConsumerElement extends Components.StateStoreConsumer, HTMLStencilElement {}
  var HTMLStateStoreConsumerElement: {
    prototype: HTMLStateStoreConsumerElement;
    new (): HTMLStateStoreConsumerElement;
  };

  interface HTMLStateStoreProviderElement extends Components.StateStoreProvider, HTMLStencilElement {}
  var HTMLStateStoreProviderElement: {
    prototype: HTMLStateStoreProviderElement;
    new (): HTMLStateStoreProviderElement;
  };
  interface HTMLElementTagNameMap {
    'demo-consumer': HTMLDemoConsumerElement;
    'demo-provider': HTMLDemoProviderElement;
    'state-store-consumer': HTMLStateStoreConsumerElement;
    'state-store-provider': HTMLStateStoreProviderElement;
  }
}

declare namespace LocalJSX {
  interface DemoConsumer extends JSXBase.HTMLAttributes<HTMLDemoConsumerElement> {
    'prop'?: string;
  }
  interface DemoProvider extends JSXBase.HTMLAttributes<HTMLDemoProviderElement> {}
  interface StateStoreConsumer extends JSXBase.HTMLAttributes<HTMLStateStoreConsumerElement> {
    'consumer': any;
    'onRunopencode:store:consumer:register'?: (event: CustomEvent<any>) => void;
    'onRunopencode:store:consumer:request'?: (event: CustomEvent<any>) => void;
    'onRunopencode:store:consumer:unregister'?: (event: CustomEvent<any>) => void;
  }
  interface StateStoreProvider extends JSXBase.HTMLAttributes<HTMLStateStoreProviderElement> {
    'onRunopencode:store:provider:register'?: (event: CustomEvent<any>) => void;
    'onRunopencode:store:provider:unregister'?: (event: CustomEvent<any>) => void;
    'provider': any;
  }

  interface IntrinsicElements {
    'demo-consumer': DemoConsumer;
    'demo-provider': DemoProvider;
    'state-store-consumer': StateStoreConsumer;
    'state-store-provider': StateStoreProvider;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

