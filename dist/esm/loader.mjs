import { a as patchEsm, b as bootstrapLazy } from './index-f28230a3.js';
import './app-globals-6e229d11.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["demo-consumer_4",[[1,"demo-consumer",{"prop":[1],"counter":[32]}],[1,"demo-provider",{"counter":[32]}],[4,"state-store-consumer",{"consumer":[16]}],[4,"state-store-provider",{"provider":[16]}]]]], options);
});

export { defineCustomElements };
