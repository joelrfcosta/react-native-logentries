# Logentries React Native library

A React Native library that allows to log to remote logging service [Logentries](https://logentries.com).

## Installation

```
$ rnpm install https://github.com/joelrfcosta/react-native-logentries/library
```

## Usage

Import `Logentries` library:

``` Javascript
import Logentries from 'react-native-logentries'
```

Initialize on constructor using your project Logentries [token](https://docs.logentries.com/docs/get-set-up):

``` Javascript
constructor(props) {
  super(props)

  Logentries.setToken("00000000-0000-0000-0000-000000000000")
}
```

Call log function to send to Logentries:

``` Javascript
Logentries.log("React Native Logentries test log")
```

## Debug

To debug the library just set Logentries `debug` property to `true` before setting the token:

``` Javascript
constructor(props) {
  super(props)

  Logentrie.debug = true
  Logentries.setToken("00000000-0000-0000-0000-000000000000")
}
```

It will print the messages on Developer Tools console.
