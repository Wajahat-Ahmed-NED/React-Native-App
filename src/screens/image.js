import React from 'react'
import { View } from 'react-native'
import CardDetail from '../component/CardDetail'

export default function Images() {
        return (
                <View >
                        <CardDetail text="Wajahat Ahmed"
                                imgSrc={require("../../assets/test.jpg")} />
                        <CardDetail text="Wajahat Ahmed"
                                imgSrc={require("../../assets/test.jpg")} />
                        <CardDetail text="Wajahat Ahmed"
                                imgSrc={require("../../assets/test.jpg")} />
                </View>
        )
}

