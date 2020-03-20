import { Component, Prop, Host, h, Element } from '@stencil/core';
import { getRegisteredStores } from '../../decorator/provide';
import { Registry } from '../../utils/registry';
export class Provider {
    constructor() {
        this.onStoreRequested = (event) => {
            let request = event.detail;
            if (!this.stores.has(request.name)) {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
            let store = this.stores.get(request.name);
            request.consumer[request.property].resolve(store);
        };
    }
    /**
     * Get list of registered stores from provider
     * and notify registry that provider is ready for
     * requests.
     */
    connectedCallback() {
        let children = Array.from(this.el.childNodes).filter((element) => {
            return '#comment' !== element.nodeName;
        });
        let hasChildren = 0 !== children.length;
        let target = this.el;
        if (!hasChildren) {
            target = this.el.parentElement;
        }
        target.addEventListener('runopencode:store:consumer:request', this.onStoreRequested);
        this.stores = getRegisteredStores(this.provider);
        Registry.getInstance().notify();
    }
    disconnectedCallback() {
        this.el.removeEventListener('runopencode:store:consumer:request', this.onStoreRequested);
        this.el.parentElement.removeEventListener('runopencode:store:consumer:request', this.onStoreRequested);
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "state-store-provider"; }
    static get properties() { return {
        "provider": {
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
                "text": "Providing component"
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
