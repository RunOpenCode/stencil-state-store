'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-99071f55.js');
const provide = require('./provide-b34d6d95.js');

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
const DemoConsumer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.prop = null;
        this.increase = async () => {
            let store = await this.store;
            let state = store.snapshot();
            state.counter++;
            store.patch(state);
        };
    }
    async componentDidLoad() {
        let store = await this.store;
        this.subscription = store.subscribe(() => {
            this.counter = store.snapshot().counter;
        });
    }
    disconnectedCallback() {
        this.subscription.unsubscribe();
    }
    render() {
        return (index.h(index.Host, null, index.h("state-store-consumer", { consumer: this }), index.h("div", null, index.h("div", null, "Current value rendered from consumer component: ", index.h("span", null, this.counter)), index.h("div", null, index.h("button", { onClick: this.increase }, "Increase counter from consumer")))));
    }
};
__decorate([
    provide.Consume('demo-store'),
    __metadata("design:type", Promise)
], DemoConsumer.prototype, "store", void 0);

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
const DemoProvider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.increase = () => {
            let state = this.store.snapshot();
            state.counter++;
            this.store.patch(state);
        };
    }
    connectedCallback() {
        this.subscription = this.store.subscribe((state) => {
            this.counter = state.counter;
        });
    }
    disconnectedCallback() {
        this.subscription.unsubscribe();
    }
    render() {
        return (index.h(index.Host, null, index.h("state-store-provider", { provider: this }), index.h("slot", null), index.h("div", null, index.h("div", null, "Current value rendered from provider component: ", index.h("span", null, this.counter)), index.h("div", null, index.h("button", { onClick: this.increase }, "Increase counter from provider")))));
    }
};
__decorate$1([
    provide.Provide({
        name: 'demo-store',
        defaults: {
            counter: 1,
        },
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
        this._subject = new provide.Subject();
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

const Consumer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * List of all requested stores.
         */
        this.requests = [];
        /**
         * Subscription to provider Registry.
         */
        this.subscription = null;
        this.request = index.createEvent(this, "runopencode:store:consumer:request", 7);
    }
    /**
     * When consumer is added to DOM, stores are required from provider(s).
     *
     * If there are no requested stores available, subscribe to a registry and
     * wait until provider is available.
     */
    connectedCallback() {
        this.requests = provide.getStoreRequests(this.consumer);
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
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};

const Provider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.stores = provide.getRegisteredStores(this.provider);
        Registry.getInstance().notify();
    }
    disconnectedCallback() {
        this.el.removeEventListener('runopencode:store:consumer:request', this.onStoreRequested);
        this.el.parentElement.removeEventListener('runopencode:store:consumer:request', this.onStoreRequested);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
    get el() { return index.getElement(this); }
};

exports.demo_consumer = DemoConsumer;
exports.demo_provider = DemoProvider;
exports.state_store_consumer = Consumer;
exports.state_store_provider = Provider;
