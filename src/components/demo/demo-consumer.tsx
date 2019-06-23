import {Component, h, Prop} from "@stencil/core";
import {Consume}            from "../../decorator/consume";

@Component({
    tag:    'demo-consumer',
    shadow: true,
})
export class DemoConsumer {

    @Prop()
    public prop: string = null;

    @Consume({callback: 'onDefaultStoreProvided'})
    public defaultStore = null;

    @Consume({
        store: 'named-store',
    })
    public namedStore = null;

    @Consume({
        store: 'does-not-exits'
    })
    public missingStore = null;

    public render() {
        return (
            <state-store-consumer consumer={this}>
                <slot/>
            </state-store-consumer>
        );
    }

    public onDefaultStoreProvided(): void {
        console.log(this.defaultStore);
    }
}
