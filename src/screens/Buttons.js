import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Alert, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
// import { Alert } from 'react-native-web'

export default function Buttons() {
        return (
                <View>
                        <Text style={styles.textStyles}>Buttons </Text>
                        <Button
                                // disabled
                                title="Login Here"
                                onPress={() => {

                                        Alert.alert("Simple Button Pressed")
                                        console.log("This is wajahat ahmed")
                                }
                                }
                        />

                        <TouchableOpacity
                                onPress={() => {
                                        console.log('Its me touchable Opacity')
                                }}>
                                <Text style={styles.textStyles2}>Click me here</Text>
                                <Image style={styles.imageStyle}
                                        source={require("../../assets/test.jpg")} />

                        </TouchableOpacity>
                </View>
        )
}

const styles = StyleSheet.create({
        textStyles: {
                marginVertical: 200,
                textAlign: 'center',
                fontSize: 30
        },
        textStyles2: {
                marginVertical: 20,
                textAlign: 'center',
                fontSize: 10
        },
        imageStyle: {
                width: 300,
                height: 300,
                margin: 30,
        }
})

