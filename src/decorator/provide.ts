import 'reflect-metadata';

const consumeKey = Symbol('provide');

export function Provide(options?: ProvideOptions) {
    options = {
        ...{store: 'default'},
        ...(options || {})
    };
    return Reflect.metadata(consumeKey, options);
}

export function getProvideOptions(target: any, propertyKey: string) {
    return Reflect.getMetadata(consumeKey, target, propertyKey);
}

export interface ProvideOptions {
    store?: string;
}
