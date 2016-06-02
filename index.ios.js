/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Saber extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello~My React-Native!!!</Text>
                <Image style={{width: 50, height: 50, resizeMode: Image.resizeMode.contain}}
                    source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}}>
                </Image>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05A5D1',
    },
    welcome: {
        fontSize: 20,
        color: '#fff',
    },
});

AppRegistry.registerComponent('Saber', () => Saber);
