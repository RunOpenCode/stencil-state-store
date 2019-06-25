import {Config} from '@stencil/core';

export const config: Config = {
    namespace:     'stencil-state-store',
    outputTargets: [
        {
            type:          'dist',
            esmLoaderPath: '../loader'
        },
        {
            type: 'docs-readme'
        },
        {
            type:          'www',
            serviceWorker: null // disable service workers
        }
    ],
    globalScript: 'src/global/index.ts'
};
