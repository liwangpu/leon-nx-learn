export * from './card';
// import {store  } from './store';

import { MY_RC_LIB_VERSION } from 'my-rc-lib';

export class MyStore1 {
  create() {
    console.log(`create work!`, MY_RC_LIB_VERSION);
    import('./card')
  }
}