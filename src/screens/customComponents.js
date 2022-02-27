import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function CustomComponent() {
        let myname = 'wajahat'
        return (
                <View style={styles.container}>
                        <Text style={styles.textStyle}>Welcome to thapa technical channel</Text>
                        <Text style={styles.textStyle1}>We love React Native and I am a subscriber of Thapa Technical Channel</Text>
                        <Text>Hi, My name is {myname}</Text>
                        <StatusBar style="auto" />
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
        },
        textStyle: {
                color: 'blue',
                fontSize: 40,
        },
        textStyle1: {
                fontSize: 30,
        }

});
