import {Component, h, State}     from "@stencil/core";
import {Unsubscribable}          from "rxjs";
import {Provide}                 from "../../decorator/provide";
import {StoreInterface}          from "../../store/store.interface";
import {State as ComponentState} from "./state";

@Component({
    tag:    'demo-provider',
    shadow: true,
})
export class DemoProvider {

    @Provide({
        name:     'demo-store',
        defaults: {
            counter: 1
        }
    })
    public store: StoreInterface<ComponentState>;

    private subscription: Unsubscribable;

    @State()
    private counter: number;

    public connectedCallback(): void {
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
            <state-store-provider provider={this}>
                <div>
                    Current value rendered from provider component: <span>{this.counter}</span>
                </div>
                <div>
                    <button onClick={this.increase.bind(this)}>Increase counter from provider</button>
                </div>
                <slot/>
            </state-store-provider>
        );
    }
}
