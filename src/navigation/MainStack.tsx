import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

export type MainStackNavigatorParamList = {
	home: undefined;
};

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

function MainStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false}}>
			<Stack.Screen name="home" component={HomeScreen} />
		</Stack.Navigator>
	);
}

export default MainStack