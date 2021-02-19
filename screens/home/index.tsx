import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StackTopBar } from '../../types'

//screens
import Home from './home'

//navigator
const Tab = createMaterialTopTabNavigator<StackTopBar>()

const tabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: "black",
            style: {
                backgroundColor: "lightskyblue",
            },
            indicatorStyle: {
                backgroundColor: "white",
                height: 4,
            },
            labelStyle: {
                fontWeight: "bold",
            }
        }}
    >
        <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>
)

export default tabNavigator