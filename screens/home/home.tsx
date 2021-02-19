import React from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types'
import ChatResume from '../../components/chatResume'

type HomeProp = StackNavigationProp<RootStackParamList, 'Home'>

const Home: React.FC<HomeProp> = ({navigate}): JSX.Element => {
    const chats = [
        {
            photo: "",
            name: "",
            id: "asdasd",
            sender: "asa",
            message: "Hi"
        }
    ]

    return (
        <ScrollView>
            {chats.map(chat => (
                <View key={chat.id}>
                    <TouchableOpacity>
                        <ChatResume />
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