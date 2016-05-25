/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} = React;

var Saber = React.create({
    render: function () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>欢迎来到React Native的世界!</Text>
                <Image style={{width: 50, height: 50, resizeMode: Image.resizeMode.contain}}
                    source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}}>
                </Image>
            </View>
        );
    }
});

var style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#o5A5D1'
    },
    welcome: {
        fontSize: 20,
        color: '#fff'
    }
});

AppRegistry.registerComponent('Saber', () => Saber);
/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Saber extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎来到React Native的世界!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
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

AppRegistry.registerComponent('Saber', () => Saber);
*/
