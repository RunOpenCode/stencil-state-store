import {Component, Prop, h, EventEmitter, Event, Listen} from "@stencil/core";
import {getRegisteredStores}                             from "../../decorator/provide";
import {StoreInterface}                                  from "../../store/store.interface";
import {Request}                                         from "../../utils/request";

@Component({
    tag:    'state-store-provider',
    shadow: true
})
export class Provider {

    @Prop()
    public provider!: any;

    @Event({
        eventName: '@runopencode:store:provider:register',
        bubbles:   true
    })
    private register: EventEmitter;

    private stores: Map<string, StoreInterface<any>>;

    public connectedCallback(): void {
        this.stores = getRegisteredStores(this.provider);
        this.register.emit();
    }

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
