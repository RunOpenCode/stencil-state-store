import {Component, Prop, EventEmitter, Event, h} from "@stencil/core";
import {RequestMetadata}                         from "../../utils/request-metadata";
import {Registry}                                from "../../utils/registry";
import {Store}                                   from "../../utils/store";

Registry.create();

@Component({
    tag:    'state-store-consumer',
    shadow: true
})
export class Consumer {

    @Prop()
    public consumer!: any;

    @Event({
        eventName: 'runopencode:store:consumer:register',
        bubbles:   true,
        composed:  true,
    })
    public register: EventEmitter;

    @Event({
        eventName: 'runopencode:store:consumer:unregister',
        bubbles:   true,
        composed:  true,
    })
    public unregister: EventEmitter;

    @Event({
        eventName: 'runopencode:store:consumer:request',
        bubbles:   true,
        composed:  true,
    })
    public request: EventEmitter;

    private requests: RequestMetadata[];

    /**
     * When provider is added to DOM, it should be registered in registry.
     */
    public connectedCallback(): void {
        this.requests = RequestMetadata.parse(this);
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

    public requestStateStores(): void {

        this.requests.forEach((request: RequestMetadata) => {
            this.request.emit(request);
        });
    }

    public provide(request: RequestMetadata, store: Store<any>): void {
        request.consumer[request.property] = store;

        if (request.callback) {
            request.callback();
        }
    }
}
