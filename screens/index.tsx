import React from 'react'
import { Button, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StackTopBar } from '../types'

///redux
import { storeType } from '../store'
import { useSelector, } from 'react-redux'

//screens
import Invite from './login/invite'
import Home from './home/home'

//navigator
const Tab = createMaterialTopTabNavigator<StackTopBar>()

//stack
import { RootStackParamList } from '../types'
import { StackNavigationProp } from '@react-navigation/stack'

type homeProp = StackNavigationProp<RootStackParamList, "Home">

type props = {
    navigation: homeProp
}

const tabNavigator: React.FC<props> = ({navigation}): JSX.Element => {
    const user = useSelector((store: storeType) => store.user)

    return <Invite navigation={navigation}/>/* user.user ? (
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
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    ) : <Invite navigation={navigation}/> */
}

export default tabNavigator