# Logentries React Native library

A React Native library that allows to log to remote logging service [Logentries](https://logentries.com).

## Installation

```
$ rnpm install https://github.com/joelrfcosta/react-native-logentries
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
