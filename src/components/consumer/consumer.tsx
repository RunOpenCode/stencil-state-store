import {Component, Prop, EventEmitter, Event, h} from "@stencil/core";
import {Subscription}                            from "rxjs";
import {getStoreRequests}                        from "../../decorator/consume";
import {Registry}                                from "../../utils/registry";
import {Request}                                 from "../../utils/request";

@Component({
    tag:    'state-store-consumer',
    shadow: true
})
export class Consumer {

    @Prop()
    public consumer!: any;

    @Event({
        eventName:  'runopencode:store:consumer:request',
        bubbles:    true,
        composed:   true,
        cancelable: true,
    })
    public request: EventEmitter;

    private requests: Request[] = [];

    private subscription: Subscription = null;

    /**
     * When provider is added to DOM, it should be registered in registry.
     */
    public connectedCallback(): void {
        this.requests = getStoreRequests(this.consumer);
        this.require();

        if (0 === this.requests.length) {
            return;
        }

        this.subscription = Registry.getInstance().subscribe(() => {
            this.require();
        });
    }

    /**
     * When provider is removed from DOM, it should be unregistered from registry.
     */
    public disconnectedCallback(): void {

        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }

        this.requests = [];
    }

    public render() {
        return (
            <slot/>
        )
    }

    private require(): void {

        let remove: Request[] = [];

        this.requests.forEach((request: Request) => {

            if (this.request.emit(request).defaultPrevented) {
                remove.push(request);
            }
        });

        remove.forEach((request: Request) => {
            this.requests.splice( this.requests.indexOf(request), 1);
        });

        if (0 === this.requests.length) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
}
