import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

//redux
import { storeType } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../redux/actionCreator'
import { TouchableOpacity } from 'react-native-gesture-handler'

//props
import { RootStackParamList } from '../../types'
import { StackNavigationProp } from '@react-navigation/stack'

type ChatNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>

type props = {
    navigation: ChatNavigationProp
}

const Login: React.FC<props> = ({navigation}): JSX.Element => {
    const dispatch = useDispatch()
    const user = useSelector((store: storeType) => store.user)

    const handleUser = () => {
        dispatch(getUser(1))
        navigation.navigate('Home')
    }

    const handleRedirect = () => navigation.navigate('Register')

    return (
        <View style={s.container}>
            <Text>Welcome</Text>
            <Text>Your phone?</Text>
            <View style={s.container_inputs}>
                <View style={s.container_number}>
                    <Text style={s.separator}>+</Text>
                    <TextInput style={s.input} />
                </View>
                <View style={s.container_number}>
                    <TextInput style={s.input} />
                    <Text style={s.separator}>-</Text>
                    <TextInput style={s.input} />
                </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container_inputs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: 40,
        width: 300,
    },
    input: {
        borderBottomColor: 'gray',
        borderBottomWidth: .5,
        width: 80,
        height: 40,
        marginLeft: 5,
        padding: 5,
        fontSize: 30,
    },
    separator: {
        fontSize: 30,
    },
    container_number: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: 180,
    },
    btn: {
        borderRadius: 8,
        borderWidth: .5,
        borderColor: 'gray',
        padding: 10,
    },
    container_text: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        maxHeight: 100,
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