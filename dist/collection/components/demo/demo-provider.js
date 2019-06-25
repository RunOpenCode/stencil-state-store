var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h } from "@stencil/core";
import { Provide } from "../../decorator/provide";
export class DemoProvider {
    connectedCallback() {
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
        return (h("state-store-provider", { provider: this },
            h("div", null,
                "Current value rendered from provider component: ",
                h("span", null, this.counter)),
            h("div", null,
                h("button", { onClick: this.increase.bind(this) }, "Increase counter from provider")),
            h("slot", null)));
    }
    static get is() { return "demo-provider"; }
    static get encapsulation() { return "shadow"; }
    static get states() { return {
        "counter": {}
    }; }
}
__decorate([
    Provide({
        name: 'demo-store',
        defaults: {
            counter: 1
        }
    }),
    __metadata("design:type", Object)
], DemoProvider.prototype, "store", void 0);
