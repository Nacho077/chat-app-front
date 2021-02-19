import 'react-native-gesture-handler'
import React from 'react';
// import { StatusBar } from 'expo-status-bar';

//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'

//screens
import Home from './screens/home'

//pages stack
const Stack = createStackNavigator<RootStackParamList>()

const MyStack = (): JSX.Element => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: 'lightskyblue',
				shadowOpacity: 0,
				elevation: 0,
			},
			headerTitleAlign: 'center',
		}}
	>
		<Stack.Screen name="Home" component={Home}/>
	</Stack.Navigator>
)

//app
const App = (): JSX.Element => (
	<NavigationContainer>
		<MyStack/>
	</NavigationContainer>
)

export default App
