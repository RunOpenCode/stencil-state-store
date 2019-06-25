import { StoreInterface } from "../../store/store.interface";
import { State as ComponentState } from "./state";
export declare class DemoConsumer {
    prop: string;
    store: StoreInterface<ComponentState>;
    private subscription;
    private counter;
    injectStore(store: StoreInterface<ComponentState>): void;
    onDefaultStoreProvided(store: StoreInterface<ComponentState>): void;
    disconnectedCallback(): void;
    private increase;
    render(): any;
}
