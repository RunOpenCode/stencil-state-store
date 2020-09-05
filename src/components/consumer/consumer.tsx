import { Component, Prop, EventEmitter, Event, ComponentInterface, Host, h } from '@stencil/core';
import { Subscription }                                                      from 'rxjs';
import { getStoreRequests }                                                  from '../../decorator/consume';
import { Registry }                                                          from '../../utils/registry';
import { Request }                                                           from '../../utils/request';

@Component({
    tag:    'state-store-consumer',
    shadow: false,
})
export class Consumer implements ComponentInterface {

    /**
     * Consuming component.
     */
    @Prop()
    public consumer!: ComponentInterface;

    /**
     * Request for store event.
     */
    @Event({
        eventName:  'stateStoreConsumerRequest',
        bubbles:    true,
        composed:   true,
        cancelable: true,
    })
    public request: EventEmitter;

    /**
     * List of all requested stores.
     */
    private requests: Request[] = [];

    /**
     * Subscription to provider Registry.
     */
    private subscription: Subscription = null;

    /**
     * When consumer is added to DOM, stores are required from provider(s).
     *
     * If there are no requested stores available, subscribe to a registry and
     * wait until provider is available.
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
     * When consumer is removed from DOM, unsubscribe from the registry
     * and clear any remaining store requests from list.
     */
    public disconnectedCallback(): void {

        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }

        this.requests = [];
    }

    /**
     * For each request for store from the list,
     * fire request event which will bubble up to the provider,
     * if provider is available.
     */
    private require(): void {

        // list of satisfied requests
        let remove: Request[] = [];

        this.requests.forEach((request: Request) => {

            // if default is prevented for the event
            // that means that request for store is satisfied
            // and it should be removed from the list
            if (this.request.emit(request).defaultPrevented) {
                remove.push(request);
            }
        });

        // remove all satisfied requests
        remove.forEach((request: Request) => {
            this.requests.splice(this.requests.indexOf(request), 1);
        });

        // if list of store requests is empty and there is subscription to
        // registry, do unsubscribe.
        if (0 === this.requests.length && null !== this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }

    public render(): h.JSX.IntrinsicElements {
        return (
            <Host>
                <slot/>
            </Host>
        )
    }
}
