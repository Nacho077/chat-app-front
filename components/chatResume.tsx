import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { storeType } from '../store'
import {chat} from '../types'


const ChatResume: React.FC<{chat: chat}> = ({chat}): JSX.Element => {
    const user = useSelector((store: storeType) => store.user.user)
    const {photo, name, messages} = chat

    return (
        <View style={s.container_main}>
            <Avatar
                rounded
                source={{ uri: photo }}
                size="large"
            />
            <View style={s.container_name}>
                <Text style={s.name}>{name}</Text>
                <View>
                    <Text style={s.message}>{messages[messages.length - 1].message}</Text>
                </View>
            </View>
            <View>
                <Icon
                    style={s.icon}
                    name={messages[messages.length - 1].sender === user?.id ? "" : "envelope"}
                    type="font-awesome-5"
                />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container_main: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    },
    container_name: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 15
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
    },
    message: {
        color: "gray",
        fontSize: 16
    },
    icon: {
        marginTop: "100%",
    },
})

export default ChatResume
