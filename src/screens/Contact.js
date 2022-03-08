import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Contact() {
        return (
                <View style={styles.container}>
                        <Text style={{ fontSize: 32 }}>Contact Us Page</Text>
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