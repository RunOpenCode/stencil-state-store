import {Consumer}                          from "../components/consumer/consumer";
import {ConsumeOptions, getConsumeOptions} from "../decorator/consume";

export class RequestMetadata {

    private readonly _requestedBy: Consumer;

    private readonly _consumer: any;

    private readonly _property: string;

    private readonly _store: string;

    private readonly _callback: (() => void) | null = null;

    public constructor(
        requestedBy: Consumer,
        property: string,
        store: string,
        callback: (() => void) | string | null = null
    ) {
        this._requestedBy = requestedBy;
        this._consumer    = requestedBy.consumer;
        this._property    = property;
        this._store       = store;

        if (!callback) {
            return;
        }

        if ('string' === typeof callback) {
            callback = this._consumer[callback].bind(this._consumer);
        }

        this._callback = callback as (() => void);
    }

    public get requestedBy(): Consumer {
        return this._requestedBy;
    }

    public get consumer(): any {
        return this._consumer;
    }

    public get property(): string {
        return this._property;
    }

    public get store(): string {
        return this._store;
    }

    public get callback(): (() => void) | null {
        return this._callback;
    }

    public static parse(consumer: Consumer): RequestMetadata[] {

        let properties: Array<string> = Object.getOwnPropertyNames(consumer.consumer);
        let parsed: RequestMetadata[] = [];

        properties.forEach((property: string) => {
            let options: ConsumeOptions = getConsumeOptions(consumer.consumer, property);

            if (!options) {
                return;
            }

            parsed.push(new RequestMetadata(
                consumer,
                property,
                options.store,
                options.callback,
            ));
        });

        return parsed;
    }
}
