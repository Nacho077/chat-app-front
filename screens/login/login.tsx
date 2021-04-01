import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

//redux
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/actionCreator'
import { TouchableOpacity } from 'react-native-gesture-handler'

//props
import { RootStackParamList } from '../../types'
import { StackNavigationProp } from '@react-navigation/stack'

type ChatNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>

type props = {
    navigation: ChatNavigationProp
}

const Login: React.FC<props> = ({ navigation }): JSX.Element => {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({
        prefix: '+',
        number: ''
    })

    const handleUser = () => {
        dispatch(getUser(1))
        navigation.navigate('Home')
    }

    const handleRedirect = () => navigation.navigate('Register')

    const hanldeInputs = (val: string, name: string): void => {
        setInputs({
            ...inputs,
            [name]: val
        })
    }

    return (
        <View style={s.container}>
            <Text style={s.title}>Verify you phone number</Text>
            <Text style={s.subtitle}>We will send an SMS message to verify you phone number!</Text>
            <View style={s.container_inputs}>
                <TextInput
                    style={s.input}
                    placeholder="+"
                    keyboardType="number-pad"
                    onChangeText={(val: string) => hanldeInputs(val, 'prefix')}
                    value={inputs.prefix}
                />
                <TextInput
                    style={s.input}
                    placeholder="Phone number"
                    keyboardType="number-pad"
                    onChangeText={(val: string) => hanldeInputs(val, 'number')}
                    value={inputs.number}
                />
            </View>
            <TouchableOpacity onPress={handleUser} style={s.btn}>
                <Text>
                    Log in
                </Text>
            </TouchableOpacity>
            <View style={s.container_text}>
                <Text style={s.text}>You have don't account?</Text>
                <TouchableOpacity onPress={handleRedirect}>
                    <Text style={s.link}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        color: '#7D4298',
        fontSize: 26,
    },
    subtitle: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    container_inputs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 100,
    },
    input: {
        width: 140,
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#7D4298',
        fontSize: 18,
    },
    btn: {},
    container_text: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        maxHeight: 25,
    },
    text: {
        fontSize: 16,
    },
    link: {
        fontSize: 16,
        color: 'blue',
        marginLeft: 5,
    },
})

export default Login;