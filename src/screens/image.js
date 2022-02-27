import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Images() {
        return (
                <View style={styles.listStyle}>
                        <Text style={styles.textStyle}>This is Image file</Text>
                        <Image style={styles.imageStyle}
                                source={require("../../assets/test.jpg")} />
                        <Image style={styles.imageStyle}
                                source={require("../../assets/test.jpg")} />
                        <Image style={styles.imageStyle}
                                source={require("../../assets/test.jpg")} />
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
                aligntItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 30
        },
        imageStyle: {
                width: 300,
                height: 300,
                margin: 10,
        }

})