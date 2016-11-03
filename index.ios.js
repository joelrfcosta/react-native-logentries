/**
 * @providesModule RCTLogentries
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native'

const Logentries = NativeModules.Logentries

module.exports = {
  setToken: function(token: string) {
    Logentries.setToken(token)
  },
  log: function(data: string) {
    Logentries.log(data)
  }
}
