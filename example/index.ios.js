/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Logentries from 'react-native-logentries';

export default class example extends Component {
  constructor(props) {
    super(props)
    this.count = 0
    Logentries.debug = true
    Logentries.setToken("00000000-0000-0000-0000-000000000000")    
  }

  sendAnotherMessage() {
    this.count += 1
    Logentries.log(`Another message ${this.count}`)
  }

  render() {
    Logentries.log("Rendering...")
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to{'\n'}React Native Logentries{'\n'}sample app.
        </Text>
        <Text style={styles.instructions}>
          Execute Cmd+D or shake for dev menu{'\n'}
          and choose "Start Remote JS Debugging".{'\n'}
          It should print on console every{'\n'}
          Logentries action.{'\n'}
        </Text>
        <Button
          onPress={() => this.sendAnotherMessage()}
          title="Send another message"
          accessibilityLabel="Send another message to Logentries"
        />
        <Text style={styles.instructions}>
          {'\n'}
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
