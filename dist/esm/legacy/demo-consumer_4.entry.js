import { r as registerInstance, h, c as createEvent } from './chunk-57ec6783.js';
import { C as Consume, P as Provide, S as Subject, g as getStoreRequests, a as getRegisteredStores } from './chunk-03875da1.js';
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
var DemoConsumer = /** @class */ (function () {
    function DemoConsumer(hostRef) {
        registerInstance(this, hostRef);
        this.prop = null;
    }
    DemoConsumer.prototype.injectStore = function (store) {
        console.log('Store injected via method injection.', store);
    };
    DemoConsumer.prototype.onDefaultStoreProvided = function (store) {
        var _this = this;
        console.log('After store is injected, instance method is invoked.', store);
        this.store = store;
        this.subscription = this.store.subscribe(function (state) {
            _this.counter = state.counter;
        });
    };
    DemoConsumer.prototype.disconnectedCallback = function () {
        this.subscription.unsubscribe();
    };
    DemoConsumer.prototype.increase = function () {
        var state = this.store.snapshot();
        state.counter++;
        this.store.patch(state);
    };
    DemoConsumer.prototype.render = function () {
        return (h("state-store-consumer", { consumer: this }, h("div", null, "Current value rendered from consumer component: ", h("span", null, this.counter)), h("div", null, h("button", { onClick: this.increase.bind(this) }, "Increase counter from consumer")), h("slot", null)));
    };
    return DemoConsumer;
}());
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
        callback: function (store) {
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
var DemoProvider = /** @class */ (function () {
    function DemoProvider(hostRef) {
        registerInstance(this, hostRef);
    }
    DemoProvider.prototype.connectedCallback = function () {
        var _this = this;
        this.subscription = this.store.subscribe(function (state) {
            _this.counter = state.counter;
        });
    };
    DemoProvider.prototype.disconnectedCallback = function () {
        this.subscription.unsubscribe();
    };
    DemoProvider.prototype.increase = function () {
        var state = this.store.snapshot();
        state.counter++;
        this.store.patch(state);
    };
    DemoProvider.prototype.render = function () {
        return (h("state-store-provider", { provider: this }, h("div", null, "Current value rendered from provider component: ", h("span", null, this.counter)), h("div", null, h("button", { onClick: this.increase.bind(this) }, "Increase counter from provider")), h("slot", null)));
    };
    return DemoProvider;
}());
__decorate$1([
    Provide({
        name: 'demo-store',
        defaults: {
            counter: 1
        }
    }),
    __metadata$1("design:type", Object)
], DemoProvider.prototype, "store", void 0);
var Registry = /** @class */ (function () {
    function Registry() {
        this._subject = new Subject();
        document.addEventListener('@runopencode:store:provider:register', this.onProviderRegistered.bind(this));
    }
    Registry.prototype.subscribe = function (next) {
        return this._subject.subscribe(next);
    };
    Registry.prototype.onProviderRegistered = function () {
        this._subject.next();
    };
    /**
     * Singleton implementation
     */
    Registry.getInstance = function () {
        if (!Registry._instance) {
            Registry._instance = new Registry();
        }
        return Registry._instance;
    };
    return Registry;
}());
var Consumer = /** @class */ (function () {
    function Consumer(hostRef) {
        registerInstance(this, hostRef);
        this.requests = [];
        this.subscription = null;
        this.request = createEvent(this, "runopencode:store:consumer:request", 7);
    }
    /**
     * When provider is added to DOM, it should be registered in registry.
     */
    Consumer.prototype.connectedCallback = function () {
        var _this = this;
        this.requests = getStoreRequests(this.consumer);
        this.require();
        if (0 === this.requests.length) {
            return;
        }
        this.subscription = Registry.getInstance().subscribe(function () {
            _this.require();
        });
    };
    /**
     * When provider is removed from DOM, it should be unregistered from registry.
     */
    Consumer.prototype.disconnectedCallback = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
        this.requests = [];
    };
    Consumer.prototype.render = function () {
        return (h("slot", null));
    };
    Consumer.prototype.require = function () {
        var _this = this;
        var remove = [];
        this.requests.forEach(function (request) {
            if (_this.request.emit(request).defaultPrevented) {
                remove.push(request);
            }
        });
        remove.forEach(function (request) {
            _this.requests.splice(_this.requests.indexOf(request), 1);
        });
        if (0 === this.requests.length) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    return Consumer;
}());
var Provider = /** @class */ (function () {
    function Provider(hostRef) {
        registerInstance(this, hostRef);
        this.register = createEvent(this, "@runopencode:store:provider:register", 7);
    }
    Provider.prototype.connectedCallback = function () {
        this.stores = getRegisteredStores(this.provider);
        this.register.emit();
    };
    Provider.prototype.onRequest = function (event) {
        var request = event.detail;
        if (!this.stores.has(request.name)) {
            return;
        }
        event.stopPropagation();
        event.preventDefault();
        var store = this.stores.get(request.name);
        if (request.property) {
            request.consumer[request.property] = store;
        }
        if (request.method) {
            request.method.apply(request.consumer, [store]);
        }
        if (request.callback) {
            request.callback.apply(request.consumer, [store]);
        }
    };
    Provider.prototype.render = function () {
        return (h("slot", null));
    };
    return Provider;
}());
export { DemoConsumer as demo_consumer, DemoProvider as demo_provider, Consumer as state_store_consumer, Provider as state_store_provider };
