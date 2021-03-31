import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

type props = {
  item: {
    id: number
    image: JSX.Element,
    title: string
  },
  index: number
}

const CarouselCardItem = ({ item, index }: props) => {
  return (
    <View style={styles.container} key={index}>
      {item.image}
      <Text style={styles.header}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingTop: 10,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    overflow: 'hidden',
  },
  header: {
    paddingTop: 10,
    color: "gray",
    fontSize: 28,
    textAlign: 'center',
  },
})

export default CarouselCardItem