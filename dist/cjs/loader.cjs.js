'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0bd109cf.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["demo-consumer_4.cjs",[[1,"demo-consumer",{"prop":[1],"counter":[32]}],[1,"demo-provider",{"counter":[32]}],[1,"state-store-consumer",{"consumer":[8]}],[1,"state-store-provider",{"provider":[8]},[[0,"runopencode:store:consumer:request","onRequest"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
