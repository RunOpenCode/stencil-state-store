'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-78e1c489.js');
require('./app-globals-15e25196.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["demo-consumer_4.cjs",[[1,"demo-consumer",{"prop":[1],"counter":[32]}],[1,"demo-provider",{"counter":[32]}],[4,"state-store-consumer",{"consumer":[16]}],[4,"state-store-provider",{"provider":[16]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
