import { Component, Prop, Event, Host, h } from '@stencil/core';
import { getStoreRequests } from '../../decorator/consume';
import { Registry } from '../../utils/registry';
export class Consumer {
    constructor() {
        /**
         * List of all requested stores.
         */
        this.requests = [];
        /**
         * Subscription to provider Registry.
         */
        this.subscription = null;
    }
    /**
     * When consumer is added to DOM, stores are required from provider(s).
     *
     * If there are no requested stores available, subscribe to a registry and
     * wait until provider is available.
     */
    connectedCallback() {
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
    disconnectedCallback() {
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
    require() {
        // list of satisfied requests
        let remove = [];
        this.requests.forEach((request) => {
            // if default is prevented for the event
            // that means that request for store is satisfied
            // and it should be removed from the list
            if (this.request.emit(request).defaultPrevented) {
                remove.push(request);
            }
        });
        // remove all satisfied requests
        remove.forEach((request) => {
            this.requests.splice(this.requests.indexOf(request), 1);
        });
        // if list of store requests is empty and there is subscription to
        // registry, do unsubscribe.
        if (0 === this.requests.length && null !== this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "state-store-consumer"; }
    static get properties() { return {
        "consumer": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ComponentInterface",
                "resolved": "ComponentInterface",
                "references": {
                    "ComponentInterface": {
                        "location": "import",
                        "path": "@stencil/core"
                    }
                }
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Consuming component."
            }
        }
    }; }
    static get events() { return [{
            "method": "request",
            "name": "stateStoreConsumerRequest",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Request for store event."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
