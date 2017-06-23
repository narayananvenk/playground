import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

const AppNavigator = StackNavigator(
	{
		ScreenOne: {
			screen: ScreenOne,
			navigationOptions: ({ navigation }) => ({
				title: 'Screen One'
			})
		},
		ScreenTwo: {
			screen: ScreenTwo,
			navigationOptions: ({ navigation }) => ({
				title: 'Screen Two'
			})
		}
	},
	{
		initialRouteName: 'ScreenOne'
	}
);

export default class App extends Component {	
	render() {
		return(<AppNavigator ref={(nav) => { this.navigator = nav; }} />);
	}
}
