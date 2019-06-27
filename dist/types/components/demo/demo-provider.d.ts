import { StoreInterface as Store } from "../../store/store.interface";
import { State as ComponentState } from "./state";
export declare class DemoProvider {
    store: Store<ComponentState>;
    private subscription;
    private counter;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private increase;
    render(): any;
}
