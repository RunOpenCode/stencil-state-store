import {Component, Prop, Listen, h} from '@stencil/core';
import {getRegisteredStores}        from '../../decorator/provide';
import {StoreInterface}             from '../../store/store.interface';
import {Registry}                   from '../../utils/registry';
import {Request}                    from '../../utils/request';

@Component({
    tag:    'state-store-provider',
    shadow: false,
})
export class Provider {

    /**
     * Providing component
     */
    @Prop()
    public provider!: any;

    /**
     * Stores available for consumers to be requested.
     */
    private stores: Map<string, StoreInterface<any>>;

    /**
     * Get list of registered stores from provider
     * and notify registry that provider is ready for
     * requests.
     */
    public connectedCallback(): void {
        this.stores = getRegisteredStores(this.provider);
        Registry.getInstance().notify();
    }

    /**
     * Listen for store requests.
     */
    @Listen('runopencode:store:consumer:request')
    public onRequest(event: CustomEvent): void {
        let request: Request = event.detail;

        if (!this.stores.has(request.name)) {
            return;
        }

        event.stopPropagation();
        event.preventDefault();

        let store: StoreInterface<any> = this.stores.get(request.name);

        if (request.property) {
            request.consumer[request.property] = store;
        }

        if (request.method) {
            request.method.apply(request.consumer, [store]);
        }

        if (request.callback) {
            request.callback.apply(request.consumer, [store]);
        }
    }

    public render() {
        return (
            <slot/>
        )
    }
}
