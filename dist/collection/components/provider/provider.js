import { h } from "@stencil/core";
import { getRegisteredStores } from '../../decorator/provide';
import { Registry } from '../../utils/registry';
export class Provider {
    /**
     * Get list of registered stores from provider
     * and notify registry that provider is ready for
     * requests.
     */
    connectedCallback() {
        this.stores = getRegisteredStores(this.provider);
        Registry.getInstance().notify();
    }
    /**
     * Listen for store requests.
     */
    onRequest(event) {
        let request = event.detail;
        if (!this.stores.has(request.name)) {
            return;
        }
        event.stopPropagation();
        event.preventDefault();
        let store = this.stores.get(request.name);
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
    render() {
        return (h("slot", null));
    }
    static get is() { return "state-store-provider"; }
    static get properties() { return {
        "provider": {
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
                "text": "Providing component"
            },
            "attribute": "provider",
            "reflect": false
        }
    }; }
    static get listeners() { return [{
            "name": "runopencode:store:consumer:request",
            "method": "onRequest",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
