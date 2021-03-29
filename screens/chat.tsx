import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native';

//types
import { RootStackParamList, chat } from '../types'

type ChatNavigationProp = StackNavigationProp<RootStackParamList, 'Chat'>

type ChatRouteProp = RouteProp<RootStackParamList, 'Chat'>;

type props = {
    navigation: ChatNavigationProp,
    route: ChatRouteProp   
}

const Chat: React.FC<props> = ({navigation, route}): JSX.Element => {
    
    return(
        <View>
            <Text>CHAT</Text>
        </View>
    )
}

export default Chat