/**
 * Stub of RCTLogentries for Android.
 *
 * @providesModule RCTLogentries
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native'

const Logentries = NativeModules.Logentries

//var warning = require('fbjs/lib/warning');

module.exports = {
  setToken: function(token: string) {
    //warning('Not yet implemented for Android.')
  },
  log: function(data: string) {
    Logentries.log(data);
    console.log("Test 124");
  }
}
