/**
 * Stub of RCTLogentries for Android.
 *
 * @providesModule RCTLogentries
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native'

const Logentries = NativeModules.Logentries

module.exports = {
  _debugLogs: false,
  _debugMessage: function(message) {
    if (!this._debugLogs) return
    console.log(`Logentries: ${message}`)
  },

  setDebugging: function(debug) {
    this._debugLogs = debug
  },
  
  setToken: function(token) {
    Logentries.setToken(token);
    this._debugMessage(`Token '${token}' registered`)
  },
  
  log: function(data) {
    Logentries.log(data)
    this._debugMessage(`Message '${data}' sent`)
  }



}
