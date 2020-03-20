import { p as patchBrowser, b as bootstrapLazy } from './index-01cbb744.js';
import './app-globals-6e229d11.js';

patchBrowser().then(options => {
  return bootstrapLazy([["demo-consumer_4",[[0,"demo-consumer",{"prop":[1],"counter":[32]}],[4,"demo-provider",{"counter":[32]}],[4,"state-store-consumer",{"consumer":[16]}],[4,"state-store-provider",{"provider":[16]}]]]], options);
});
