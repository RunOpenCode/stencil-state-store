import {Provider}                          from "../components/provider/provider";
import {getProvideOptions, ProvideOptions} from "../decorator/provide";

export class StoreMetadata {

    private readonly _providedBy: Provider;

    private readonly _provider: any;

    private readonly _property: string;

    private readonly _store: string;

    public constructor(providedBy: Provider, property: string, store: string) {
        this._providedBy = providedBy;
        this._provider   = providedBy.provider;
        this._property   = property;
        this._store      = store;
    }

    public get providedBy(): Provider {
        return this._providedBy;
    }

    public get provider(): any {
        return this._provider;
    }

    public get property(): string {
        return this._property;
    }

    public get store(): string {
        return this._store;
    }

    public static parse(provider: Provider): StoreMetadata[] {
        let properties: Array<string> = Object.getOwnPropertyNames(provider.provider);
        let parsed: StoreMetadata[]   = [];

        properties.forEach((property: string) => {
            let options: ProvideOptions = getProvideOptions(provider.provider, property);

            if (!options) {
                return;
            }

            parsed.push(new StoreMetadata(
                provider,
                property,
                options.store
            ));
        });

        return parsed;
    }
}
