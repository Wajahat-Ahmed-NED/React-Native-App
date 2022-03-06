import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { Linking } from 'react-native-web'
import CardDetail from './CardDetail'

export default function NetflixCard() {
        return (
                <View >
                        <Text style={styles.textStyle}>
                                NetflixCard
                        </Text>
                        <View>
                                <Image style={styles.imgStyles}
                                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG47oZO_N9xZ8QoK7yiZMTnfH6PRn-kKWGCQ&usqp=CAU" }}></Image>
                                <CardDetail imgSrc={require("../../assets/test.jpg")} />
                        </View>
                        <View>
                                <Text style={styles.post}>
                                        All in one not for all ok good thank you gullo munno pyaro so acho ho dularo ho
                                </Text>
                                <Button style={{ marginBottom: '30px' }} onPress={() => { Linking.openURL("https://youtube.com") }}>Watch Now</Button>
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        textStyle: {
                fontSize: 30,
                margin: 30,
                textAlign: 'center',
                fontWeight: 'bold'
        },
        post: {
                fontSize: 20,
                margin: 30,
                padding: 5,
                textAlign: 'justify',

        },
        imgStyles: {
                height: 200,
                width: 200,
                margin: 10,
        }
})
