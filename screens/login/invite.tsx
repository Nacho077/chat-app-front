import React, { useRef } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

//images
import Chatting from '../../assets/svg/chatting'
import Message from '../../assets/svg/mobile_message'
import Life from '../../assets/svg/modern_life'

//carousel
import Carousel from 'react-native-snap-carousel'
import CarouselItem, { SLIDER_WIDTH, ITEM_WIDTH } from './carrouselItem'

type props = {
    navigation: {
        navigate: Function
    }
}

const data = [{
        id: 1,
        image: <Chatting />,
        title: 'An app to talk to your friends'
    },
    {
        id:3,
        image: <Message />,
        title: 'Create groups of up to 50 people'       
    },
    {
        id: 4,
        image: <Life />,
        title: 'Talk to whoever you want and where you want'
    }
]

const Invite: React.FC<props> = ({ navigation }): JSX.Element => {
    const isCarousel = useRef(null)

    const handleRegister = () => navigation.navigate("Register")

    const handleLogin = () => navigation.navigate("Login")

    return (
        <View style={s.container}>
            {/* <View style={s.container_carousel}>
                <Carousel
                    layout="tinder"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={data}
                    renderItem={CarouselItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    //scrollEnabled={false}
                    loop={true}
                    autoplay={true}
                    lockScrollWhileSnapping={true}
                    autoplayDelay={4000}
                    autoplayInterval={4000}
                />
            </View> */}
            <View style={s.container_text}>
                <View style={s.container_line}>
                    <Text style={s.text}>You have account?</Text>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={s.link}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={s.container_line}>
                    <Text style={s.text}>You are a new user?</Text>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={s.link}>Register</Text>
                    </TouchableOpacity>
                </View>
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
    container_carousel: {
        maxHeight: 317,
    },
    container_text: {
        flex: 1,
        justifyContent: 'space-between',
        maxHeight: 100,
        width: 250,
    },
    container_line: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: 'gray',
        maxHeight: 50
    },
    link: {
        color: 'blue',
        fontSize: 16,
        paddingLeft: 10
    }
})

export default Invite;