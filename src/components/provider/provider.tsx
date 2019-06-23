import {Component, Prop, h, EventEmitter, Event, Listen} from "@stencil/core";
import {Registry}                                        from "../../utils/registry";
import {RequestMetadata}                                 from "../../utils/request-metadata";
import {StoreMetadata}                                   from "../../utils/store-metadata";

Registry.create();

@Component({
    tag:    'state-store-provider',
    shadow: true
})
export class Provider {

    @Prop()
    public provider!: any;

    @Event({
        eventName: 'runopencode:store:provider:register',
        bubbles:   true,
        composed:  true,
    })
    public register: EventEmitter;

    @Event({
        eventName: 'runopencode:store:provider:unregister',
        bubbles:   true,
        composed:  true,
    })
    public unregister: EventEmitter;

    private storeMetadata: StoreMetadata[];

    /**
     * When provider is added to DOM, it should be registered in registry.
     */
    public connectedCallback(): void {
        this.storeMetadata = StoreMetadata.parse(this);
        this.register.emit(this);
    }

    /**
     * When provider is removed from DOM, it should be unregistered from registry.
     */
    public disconnectedCallback(): void {
        this.unregister.emit(this);
    }

    public render() {
        return (
            <slot/>
        )
    }

    @Listen('runopencode:store:consumer:request')
    public onRequest(event: CustomEvent): void {
        let request: RequestMetadata = event.detail;

        this.storeMetadata.forEach((metadata: StoreMetadata) => {

            if (metadata.store !== request.store) {
                return;
            }

            request.requestedBy.provide(request, metadata.provider[metadata.property]);
        });
    }
}
