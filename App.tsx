import 'react-native-gesture-handler'
import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements'

//redux
import { Provider } from 'react-redux'
import store from './store'

//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'

//screens
import Login from './screens/login/login'
import Register from './screens/login/register'
import Home from './screens'
import Chat from './screens/chat'

//pages stack
const Stack = createStackNavigator<RootStackParamList>()

const MyStack = (): JSX.Element => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#7D4298',
				shadowOpacity: 0,
				elevation: 0,
			},
			headerTitleAlign: 'center',
			headerTintColor: 'white',
			headerTitleStyle: {
				fontWeight: '800',
				fontSize: 26,
			}
		}}
	>
		{/* <Stack.Screen name="Home" component={Home} />
		<Stack.Screen
			name="Chat"
			component={Chat}
			options={(props) => ({
				title: 'Test', //props.route.params.name?
				headerLeft: () => <Icon
					name="arrow-left"
					type="font-awesome-5"
					onPress={() => props.navigation.goBack()}
				/>,
				headerRight: () => <Icon
					name="ellipsis-v" 
					type="font-awesome-5"
					onPress={() => console.log(props)}
				/>
			})}
		/> */}
		<Stack.Screen
			name="Login"
			component={Login}
			options={() => ({
				headerLeft: () => false
			})}
		/>
		<Stack.Screen
			name="Register"
			component={Register}
			options={() => ({
				headerLeft: () => false
			})}
		/>
	</Stack.Navigator>
)

//app
const App = (): JSX.Element => (
	<Provider store={store}>
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	</Provider>
)

export default App
