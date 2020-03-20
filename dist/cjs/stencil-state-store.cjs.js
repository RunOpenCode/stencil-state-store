'use strict';

const index = require('./index-99071f55.js');
require('./app-globals-15e25196.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["demo-consumer_4.cjs",[[0,"demo-consumer",{"prop":[1],"counter":[32]}],[4,"demo-provider",{"counter":[32]}],[4,"state-store-consumer",{"consumer":[16]}],[4,"state-store-provider",{"provider":[16]}]]]], options);
});
