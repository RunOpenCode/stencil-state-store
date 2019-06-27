'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0bd109cf.js');
const __chunk_2 = require('./chunk-9f4d44d5.js');

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
class DemoConsumer {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return (__chunk_1.h(__chunk_1.Host, null, __chunk_1.h("state-store-consumer", { consumer: this }), __chunk_1.h("div", null, "Current value rendered from consumer component: ", __chunk_1.h("span", null, this.counter)), __chunk_1.h("div", null, __chunk_1.h("button", { onClick: this.increase.bind(this) }, "Increase counter from consumer"))));
    }
}
__decorate([
    __chunk_2.Consume({
        name: 'demo-store',
        callback: 'onDefaultStoreProvided'
    }),
    __metadata("design:type", Object)
], DemoConsumer.prototype, "store", void 0);
__decorate([
    __chunk_2.Consume({
        name: 'demo-store',
        callback: (store) => {
            console.log('After store is injected, callback function is invoked.', store);
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DemoConsumer.prototype, "injectStore", null);

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
class DemoProvider {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
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
        return (__chunk_1.h("state-store-provider", { provider: this }, __chunk_1.h("div", null, "Current value rendered from provider component: ", __chunk_1.h("span", null, this.counter)), __chunk_1.h("div", null, __chunk_1.h("button", { onClick: this.increase.bind(this) }, "Increase counter from provider")), __chunk_1.h("slot", null)));
    }
}
__decorate$1([
    __chunk_2.Provide({
        name: 'demo-store',
        defaults: {
            counter: 1
        }
    }),
    __metadata$1("design:type", Object)
], DemoProvider.prototype, "store", void 0);

/**
 * Registry deals with the issue of nondeterministic order
 * of rendering each individual component, regardless
 * of hierarchical position in DOM tree (parent, child).
 */
class Registry {
    constructor() {
        /**
         * Observable subject which notifies about new provider.
         */
        this._subject = new __chunk_2.Subject();
    }
    /**
     * Subscribe for provider registration event.
     */
    subscribe(next) {
        return this._subject.subscribe(next);
    }
    /**
     * Notify subscribers that new provider has been attached to DOM
     */
    notify() {
        this._subject.next();
    }
    /**
     * Singleton implementation
     */
    static getInstance() {
        if (!Registry._instance) {
            Registry._instance = new Registry();
        }
        return Registry._instance;
    }
}

class Consumer {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * List of all requested stores.
         */
        this.requests = [];
        /**
         * Subscription to provider Registry.
         */
        this.subscription = null;
        this.request = __chunk_1.createEvent(this, "runopencode:store:consumer:request", 7);
    }
    /**
     * When consumer is added to DOM, stores are required from provider(s).
     *
     * If there are no requested stores available, subscribe to a registry and
     * wait until provider is available.
     */
    connectedCallback() {
        this.requests = __chunk_2.getStoreRequests(this.consumer);
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
    render() {
        return (__chunk_1.h("slot", null));
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
}

class Provider {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    /**
     * Get list of registered stores from provider
     * and notify registry that provider is ready for
     * requests.
     */
    connectedCallback() {
        this.stores = __chunk_2.getRegisteredStores(this.provider);
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
        return (__chunk_1.h("slot", null));
    }
}

exports.demo_consumer = DemoConsumer;
exports.demo_provider = DemoProvider;
exports.state_store_consumer = Consumer;
exports.state_store_provider = Provider;
