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
        prefix: '+ ',
        number: ''
    })

    const handleUser = () => {
        dispatch(getUser(1))
        navigation.navigate('Home')
    }

    const handleRedirect = () => navigation.navigate('Register')

    const hanldeInputs = (val: string, name: string): void => {
        if(name === 'prefix'){
            if(val.length < 2){
                val = '+ '
            }
        }else if(name === 'number'){
            let newVal = val.split("-")
            console.log(newVal)
            if(val.length < 9 && val.length > 5){
                /* let newNum = []
                let middle = Math.round(val.length / 2)
                for(let i = 0; i < val.length; i++){
                    if(i !== middle) newNum.push(val[i])
                    else {
                        newNum.push('-')
                        newNum.push(val[i])
                    }
                }
                console.log(newNum.join("")) */
                let regex = /\d{1,4}/g
                val = val.match(regex)?.join("-") || val
            }
            if(val.length > 9){
                let regex = /\d{1,2}d{1,4}\d{4}$/
                console.log(val.match(regex))
            }
        }
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
                    style={s.input_short}
                    placeholder="+"
                    keyboardType="number-pad"
                    onChangeText={(val: string) => hanldeInputs(val, 'prefix')}
                    value={inputs.prefix}
                />
                <TextInput
                    style={s.input_large}
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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        maxHeight: 100,
    },
    input_short: {
        width: 100,
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#7D4298',
        fontSize: 22,
    },
    input_large: {
        width: 170,
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#7D4298',
        fontSize: 22,
        textAlign: 'center',
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