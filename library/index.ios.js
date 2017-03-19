/**
 * @providesModule RCTLogentries
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native'

const Logentries = NativeModules.Logentries

module.exports = {
  debug: false,

  _debugMessage: function(message: string) {
    if (!this.debug) return
    console.log(`Logentries: ${message}`)
  },
  
  setToken: function(token: string) {
    Logentries.setToken(token)
    this._debugMessage(`Token '${token}' registered`)
  },
  
  log: function(data: string) {
    Logentries.log(data)
    this._debugMessage(`Message '${data}' sent`)
  }
}
