'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-438c036f.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["demo-consumer_4.cjs",[[1,"demo-consumer",{"prop":[1],"counter":[32]}],[1,"demo-provider",{"counter":[32]}],[4,"state-store-consumer",{"consumer":[8]}],[4,"state-store-provider",{"provider":[8]},[[0,"runopencode:store:consumer:request","onRequest"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
