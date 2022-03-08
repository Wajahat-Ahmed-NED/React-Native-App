import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function About({ route }) {
        const { name } = route.params
        return (
                <View style={styles.container}>
                        <Text style={{ fontSize: 32 }}>About Us Page</Text>
                        <Text style={{ fontSize: 32 }}>{name}</Text>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
        }
})