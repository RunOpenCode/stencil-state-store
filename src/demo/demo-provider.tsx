import { Component, ComponentInterface, State, Host, h } from '@stencil/core';
import { Unsubscribable }                                from 'rxjs';
import { Provide }                                       from '../decorator/provide';
import { StoreInterface as Store }                       from '../store/store.interface';
import { State as ComponentState }                       from './state';

@Component({
    tag:    'demo-provider',
    shadow: false,
})
export class DemoProvider implements ComponentInterface {

    @Provide({
        name:     'demo-store',
        defaults: {
            counter: 1,
        },
    })
    private store: Store<ComponentState>;

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

    private increase = (): void => {
        let state: ComponentState = this.store.snapshot();

        state.counter++;

        this.store.patch(state);
    };

    public render(): h.JSX.IntrinsicElements {
        return (
            <Host>
                <state-store-provider provider={this}/>
                <slot/>
                <div>
                    <div>
                        Current value rendered from provider component: <span>{this.counter}</span>
                    </div>
                    <div>
                        <button onClick={this.increase}>Increase counter from provider</button>
                    </div>
                </div>
            </Host>
        );
    }
}
