import { StoreInterface as Store } from "../../store/store.interface";
import { State as ComponentState } from "./state";
export declare class DemoConsumer {
    prop: string;
    store: Store<ComponentState>;
    private subscription;
    private counter;
    injectStore(store: Store<ComponentState>): void;
    onDefaultStoreProvided(store: Store<ComponentState>): void;
    disconnectedCallback(): void;
    private increase;
    render(): any;
}
