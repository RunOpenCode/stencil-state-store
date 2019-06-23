import {Component, h} from "@stencil/core";
import {Provide}      from "../../decorator/provide";
import {Store}        from "../../utils/store";

@Component({
    tag: 'demo-provider',
    shadow: true,
})
export class DemoProvider {

    @Provide()
    public defaultStore: Store<{ counter: number }> = new Store({
        counter: 0
    });

    @Provide({
        store: 'named-store'
    })
    public namedStore: Store<{ counter: number }> = new Store({
        counter: 0
    });

    public render() {
        return (
            <state-store-provider provider={this}>
                <slot/>
            </state-store-provider>
        );
    }
}
