import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-web'

export default function FlatDemo() {

        const names = [
                {
                        key: '1',
                        name: 'wajahat'
                }, {
                        key: '2',
                        name: 'wajahat'
                }, {
                        key: '3',
                        name: 'wajahat'
                }, {
                        key: '4',
                        name: 'ahmed'
                },
        ]
        return (
                <View>
                        <FlatList
                                style={styles.listStyle}
                                horizontal
                                // inverted
                                showsHorizontalScrollIndicator={false}
                                data={names}
                                renderItem={({ item }) => { //element.item.name tha lekin object destructuring
                                        return <Text style={styles.textStyle}>{item.name}</Text>
                                }}
                        />
                        <Text ></Text>
                </View>
        )
}
const styles = StyleSheet.create({
        textStyle: {
                fontSize: 40,
                padding: 30,
                backgroundColor: "red",
                margin: 20,
                color: "white"

        },
        listStyle: {
                textAlign: "center",
                margin: 20,
                padding: 10,
        }
})