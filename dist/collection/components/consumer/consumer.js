import { h } from "@stencil/core";
import { getStoreRequests } from "../../decorator/consume";
import { Registry } from "../../utils/registry";
export class Consumer {
    constructor() {
        this.requests = [];
        this.subscription = null;
    }
    /**
     * When provider is added to DOM, it should be registered in registry.
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
     * When provider is removed from DOM, it should be unregistered from registry.
     */
    disconnectedCallback() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
        this.requests = [];
    }
    render() {
        return (h("slot", null));
    }
    require() {
        let remove = [];
        this.requests.forEach((request) => {
            if (this.request.emit(request).defaultPrevented) {
                remove.push(request);
            }
        });
        remove.forEach((request) => {
            this.requests.splice(this.requests.indexOf(request), 1);
        });
        if (0 === this.requests.length) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    static get is() { return "state-store-consumer"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "consumer": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "consumer",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "request",
            "name": "runopencode:store:consumer:request",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
