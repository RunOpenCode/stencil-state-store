import {Consumer} from "../components/consumer/consumer";
import {Provider} from "../components/provider/provider";

export class Registry {

    private static _instance: Registry;

    private _providers: Map<Provider, EventTarget> = new Map<Provider, EventTarget>();
    private _consumers: Map<Consumer, EventTarget> = new Map<Consumer, EventTarget>();

    private constructor() {
        document.addEventListener('runopencode:store:consumer:register', this.onConsumerRegistered.bind(this));
        document.addEventListener('runopencode:store:consumer:unregister', this.onConsumerUnregistered.bind(this));
        document.addEventListener('runopencode:store:provider:register', this.onProviderRegistered.bind(this));
        document.addEventListener('runopencode:store:provider:unregister', this.onProviderUnregistered.bind(this));
    }

    private onConsumerRegistered(event: CustomEvent): void {
        this._consumers.set(event.detail, event.target);
        event.detail.requestStateStores();
    }

    private onConsumerUnregistered(event: CustomEvent): void {
        this._consumers.delete(event.detail);
    }

    private onProviderRegistered(event: CustomEvent): void {
        this._providers.set(event.detail, event.target);

        for (let key of this._consumers.keys()) {
            key.requestStateStores();
        }
    }

    private onProviderUnregistered(event: CustomEvent): void {
        this._providers.delete(event.detail);
    }

    /**
     * Singleton implementation
     */
    public static create(): void {
        if (Registry._instance) {
            return;
        }

        Registry._instance = new Registry();
    }
}
