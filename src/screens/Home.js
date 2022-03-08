import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-web';

export default function Home(props) {
        return (
                <View style={styles.container}>
                        <Text style={{ fontSize: 32 }}>Home Page</Text>
                        <Button title="Go to About Us" onPress={() => props.navigation.navigate("About", { name: 'Wajahat' })} />

                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
        }
})