
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function CardDetail(props) {
        const { text, imgSrc } = props
        return (
                <View style={styles.listStyle}>
                        <Text style={styles.textStyle}>{text}</Text>
                        <Image style={styles.imageStyle}
                                source={imgSrc} />

                </View>
        )
}

const styles = StyleSheet.create({
        textStyle: {
                fontSize: 30

        },
        listStyle: {
                // height: 500,
                // border: '2px solid black',
                display: 'flex',
                justifyContent: 'center',
                // aligntItems: 'center',
                paddingHorizontal: 30
        },
        imageStyle: {
                width: 300,
                height: 300,
                margin: 10,

        }

})