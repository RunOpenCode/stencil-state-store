import {Component, h, Prop, State} from "@stencil/core";
import {Unsubscribable}            from "rxjs";
import {Consume}                   from "../../decorator/consume";
import {StoreInterface}            from "../../store/store.interface";
import {State as ComponentState}   from "./state";

@Component({
    tag:    'demo-consumer',
    shadow: true,
})
export class DemoConsumer {

    @Prop()
    public prop: string = null;

    @Consume({
        name:     'demo-store',
        callback: 'onDefaultStoreProvided'
    })
    public store: StoreInterface<ComponentState>;

    private subscription: Unsubscribable;

    @State()
    private counter: number;

    @Consume({
        name: 'demo-store',
        callback: (store: StoreInterface<ComponentState>) => {
            console.log('After store is injected, callback function is invoked.', store)
        }
    })
    public injectStore(store: StoreInterface<ComponentState>): void {
        console.log('Store injected via method injection.', store);
    }

    public onDefaultStoreProvided(store: StoreInterface<ComponentState>): void {
        console.log('After store is injected, instance method is invoked.', store);
        this.store = store;
        this.subscription = this.store.subscribe((state: ComponentState) => {
            this.counter = state.counter;
        });
    }

    public disconnectedCallback(): void {
        this.subscription.unsubscribe();
    }

    private increase(): void {
        let state: ComponentState = this.store.snapshot();

        state.counter++;

        this.store.patch(state);
    }

    public render() {
        return (
            <state-store-consumer consumer={this}>
                <div>
                    Current value rendered from consumer component: <span>{this.counter}</span>
                </div>
                <div>
                    <button onClick={this.increase.bind(this)}>Increase counter from consumer</button>
                </div>
                <slot/>
            </state-store-consumer>
        );
    }
}
