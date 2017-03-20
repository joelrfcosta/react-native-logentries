/**
 * @providesModule RCTLogentries
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native'

const Logentries = NativeModules.Logentries

module.exports = {
  _debugLogs: false,
  _debugMessage: function(message: string) {
    if (!this._debugLogs) return
    console.log(`Logentries: ${message}`)
  },

  setDebugging: function(debug) {
    this._debugLogs = debug
    Logentries.setDebugLogs(debug)
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
