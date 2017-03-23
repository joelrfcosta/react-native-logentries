# Logentries React Native library

A React Native library that allows to log to remote logging service [Logentries](https://logentries.com).

## Installation

On project root execute the following:

```
$ npm install react-native-logentries
```

Then link the library:

```
$ react-native link react-native-logentries
```
### Android

On Android you need to add the following to your project `build.gradle` file under `allprojects` property:
```
maven { 
  url "https://jitpack.io" 
}
```

You will have something like this:
```
allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        maven { 
            url "https://jitpack.io" 
        }
    }
}
```

**Note** You need to add `url "https://jitpack.io"` on its own `maven` property or it will not work!

### Logentries

Go to Logentries.com and generate a token for your app. You can follow the documentation here https://docs.logentries.com/docs/setup-first-log

## Usage

Import `Logentries` library (for example on `index.ios.js` or/and `index.android.js`):

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

Call `log` function to send a message to Logentries service:

``` Javascript
Logentries.log("React Native Logentries test log")
```

## Debug

To debug the library just enable debugging before setting the token:

``` Javascript
constructor(props) {
  super(props)

  Logentries.setDebugging(true)
  Logentries.setToken("00000000-0000-0000-0000-000000000000")
}
```

It will print the messages on `Developer Tools console` and on `System Log`.
