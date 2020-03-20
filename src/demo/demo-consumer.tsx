import { Component, Prop, State, Host, h, ComponentInterface } from '@stencil/core';
import { Unsubscribable }                                      from 'rxjs';
import { Consume }                                             from '../decorator/consume';
import { StoreInterface as Store }                             from '../store/store.interface';
import { State as ComponentState }                             from './state';

@Component({
    tag:    'demo-consumer',
    shadow: false,
})
export class DemoConsumer implements ComponentInterface {

    @Prop()
    public prop: string = null;

    @Consume('demo-store')
    private store: Promise<Store<ComponentState>>;

    private subscription: Unsubscribable;

    @State()
    private counter: number;

    public async componentDidLoad(): Promise<void> {
        let store: Store<ComponentState> = await this.store;
        this.subscription                = store.subscribe(() => {
            this.counter = store.snapshot().counter;
        });
    }

    public disconnectedCallback(): void {
        this.subscription.unsubscribe();
    }

    private increase = async (): Promise<void> => {
        let store: Store<ComponentState> = await this.store;
        let state: ComponentState        = store.snapshot();

        state.counter++;

        store.patch(state);
    };

    public render() {
        return (
            <Host>
                <state-store-consumer consumer={this}/>
                <div>
                    <div>
                        Current value rendered from consumer component: <span>{this.counter}</span>
                    </div>
                    <div>
                        <button onClick={this.increase}>Increase counter from consumer</button>
                    </div>
                </div>
            </Host>
        );
    }
}
