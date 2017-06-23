import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default class ScreenTwo extends Component {
	render() {
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity
					onPress={() => { this.props.navigation.goBack(); }}
				>
					<Text>Tap to go <Text style={{ fontWeight: 'bold' }}>Back</Text></Text>
				</TouchableOpacity>
			</View>
		);
	}	
}
