import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default class ScreenOne extends Component {
	render() {
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity
					onPress={() => { this.props.navigation.navigate('ScreenTwo'); }}
				>
					<Text>Tap to push <Text style={{ fontWeight: 'bold' }}>Screen Two</Text></Text>
				</TouchableOpacity>
			</View>
		);
	}
}
