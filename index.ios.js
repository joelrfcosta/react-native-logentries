/**
 * @providesModule RCTLogentries
 * @flow
 */
'use strict';

import { Logentries } from 'NativeModules'

module.exports = {
  setToken: function(token: string) {
    Logentries.setToken(token)
  },
  log: function(data: string) {
    Logentries.log(data)
  }
}
