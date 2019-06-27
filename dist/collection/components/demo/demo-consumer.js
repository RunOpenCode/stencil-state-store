var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Host, h } from "@stencil/core";
import { Consume } from "../../decorator/consume";
export class DemoConsumer {
    constructor() {
        this.prop = null;
    }
    injectStore(store) {
        console.log('Store injected via method injection.', store);
    }
    onDefaultStoreProvided(store) {
        console.log('After store is injected, instance method is invoked.', store);
        this.store = store;
        this.subscription = this.store.subscribe((state) => {
            this.counter = state.counter;
        });
    }
    disconnectedCallback() {
        this.subscription.unsubscribe();
    }
    increase() {
        let state = this.store.snapshot();
        state.counter++;
        this.store.patch(state);
    }
    render() {
        return (h(Host, null,
            h("state-store-consumer", { consumer: this }),
            h("div", null,
                "Current value rendered from consumer component: ",
                h("span", null, this.counter)),
            h("div", null,
                h("button", { onClick: this.increase.bind(this) }, "Increase counter from consumer"))));
    }
    static get is() { return "demo-consumer"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "prop": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "prop",
            "reflect": false,
            "defaultValue": "null"
        }
    }; }
    static get states() { return {
        "counter": {}
    }; }
}
__decorate([
    Consume({
        name: 'demo-store',
        callback: 'onDefaultStoreProvided'
    }),
    __metadata("design:type", Object)
], DemoConsumer.prototype, "store", void 0);
__decorate([
    Consume({
        name: 'demo-store',
        callback: (store) => {
            console.log('After store is injected, callback function is invoked.', store);
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DemoConsumer.prototype, "injectStore", null);
