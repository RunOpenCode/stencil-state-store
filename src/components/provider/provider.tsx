import { Component, Prop, ComponentInterface, Host, h, Element } from '@stencil/core';
import { getRegisteredStores }                                   from '../../decorator/provide';
import { StoreInterface }                                        from '../../store/store.interface';
import { Deferred }                                              from '../../utils/deferred';
import { Registry }                                              from '../../utils/registry';
import { Request }                                               from '../../utils/request';

@Component({
    tag:    'state-store-provider',
    shadow: false,
})
export class Provider implements ComponentInterface {

    /**
     * Providing component
     */
    @Prop()
    public provider!: ComponentInterface;

    @Element()
    private el: HTMLStateStoreProviderElement;

    /**
     * Stores available for consumers to be requested.
     */
    private stores: Map<string, StoreInterface<any>>;

    /**
     * DOM element which listens to a request event.
     */
    private handler: HTMLElement;

    /**
     * Get list of registered stores from provider
     * and notify registry that provider is ready for
     * requests.
     */
    public connectedCallback(): void {
        let children: HTMLElement[] = Array.from(this.el.childNodes).filter((element: HTMLElement) => {
            return '#comment' !== element.nodeName;
        }) as HTMLElement[];
        let hasChildren: boolean    = 0 !== children.length;
        this.handler                = this.el;

        if (!hasChildren) {
            this.handler = (this.el.parentNode) as HTMLElement;
        }

        this.handler.addEventListener('stateStoreConsumerRequest', this.onStoreRequested);

        this.stores = getRegisteredStores(this.provider);
        Registry.getInstance().notify();
    }

    public disconnectedCallback(): void {
        this.handler.removeEventListener('stateStoreConsumerRequest', this.onStoreRequested);
    }

    private onStoreRequested = (event: CustomEvent): void => {
        let request: Request = event.detail;

        if (!this.stores.has(request.name)) {
            return;
        }

        event.stopPropagation();
        event.preventDefault();

        let store: StoreInterface<any> = this.stores.get(request.name);

        (request.consumer[request.property] as Deferred<StoreInterface<any>>).resolve(store);
    };

    public render(): h.JSX.IntrinsicElements {
        return (
            <Host>
                <slot/>
            </Host>
        )
    }
}
