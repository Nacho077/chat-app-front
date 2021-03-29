import React from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import ChatResume from '../../components/chatResume'

//types
import { RootStackParamList, chat } from '../../types'

type HomeProp = StackNavigationProp<RootStackParamList, 'Home'>

type props = {
    navigation: HomeProp
}

const Home: React.FC<props> = ({ navigation }): JSX.Element => {
    const chats: chat[] = [
        {
            photo: "",
            name: "",
            id: "asdasd",
            messages: [
                {
                    id: "",
                    sender: "asdf",
                    message: "a",
                    date: new Date()
                }
            ]
        }
    ]

    return (
        <ScrollView>
            {chats.map(chat => (
                <View key={chat.id}>
                    <TouchableOpacity
                        onPress={() => console.log(navigation.navigate("Chat", chat))}>
                        <ChatResume chat={chat} />
                    </TouchableOpacity>
                    <View style={s.line} />
                </View>
            ))}
        </ScrollView>
    )
}

const s = StyleSheet.create({
    line: {
        borderBottomColor: "gray",
        borderBottomWidth: .5,
    }
})

export default Home