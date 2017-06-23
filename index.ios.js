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
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import ScreenOne from './app/ScreenOne';
import ScreenTwo from './app/ScreenTwo';

const AppNavigator = StackNavigator(
	{
		ScreenOne: {
			screen: ScreenOne
		},
		ScreenTwo: {
			screen: ScreenTwo
		}
	},
	{
		initialRouteName: 'ScreenOne'
	}
);

export default class playground extends Component {
	
	render() {
		return(<AppNavigator ref={(nav) => { this.navigator = nav; }} />);
	}
	
}

AppRegistry.registerComponent('playground', () => playground);
