import React from 'react'
import {  View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'

//props
import { RootStackParamList } from '../../types'
import { StackNavigationProp } from '@react-navigation/stack'

type ChatNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>

type props = {
    navigation: ChatNavigationProp
}

const Register: React.FC<props> = ({navigation}): JSX.Element => {
    const handleRegister = () => navigation.navigate('Login')
 
    return (
        <View style={s.container_main}>
            <Text>Register</Text>
            <TextInput placeholder="your number"/>
            <Button title="Register" onPress={handleRegister}/>
            <Text>You have account? Log in</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container_main: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})

export default Register;