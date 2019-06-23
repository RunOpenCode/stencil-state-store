import 'reflect-metadata';

const consumeKey = Symbol('consume');

export function Consume(options?: ConsumeOptions) {
    options = {
        ...{store: 'default', throws: false, callback: null},
        ...(options || {})
    };
    return Reflect.metadata(consumeKey, options);
}

export function getConsumeOptions(target: any, propertyKey: string) {
    return Reflect.getMetadata(consumeKey, target, propertyKey);
}

export interface ConsumeOptions {
    store?: string;
    callback?: (() => void) | string | null;
}
