import { StoreInterface } from "../../store/store.interface";
import { State as ComponentState } from "./state";
export declare class DemoProvider {
    store: StoreInterface<ComponentState>;
    private subscription;
    private counter;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private increase;
    render(): any;
}
