import { p as patchBrowser, b as bootstrapLazy } from './chunk-57ec6783.js';

patchBrowser().then(resourcesUrl => {
  return bootstrapLazy([["demo-consumer_4",[[1,"demo-consumer",{"prop":[1],"counter":[32]}],[1,"demo-provider",{"counter":[32]}],[1,"state-store-consumer",{"consumer":[8]}],[1,"state-store-provider",{"provider":[8]},[[0,"runopencode:store:consumer:request","onRequest"]]]]]], { resourcesUrl });
});
