import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './src/screens/customComponents';
import FlatDemo from './src/screens/FlatDemo';
import Images from './src/screens/image';

export default function App() {
  const ali = 23;
  return (

    <View >
      {/* <Text style={styles.textStyle}>Hello Wajahat Ahmed ye ma ho gullo</Text>
      <Text>my app.js {ali}</Text> */}
      {/* <CustomComponent /> */}
      {/* <FlatDemo /> */}
      <Images />
      {/* <StatusBar style="auto" /> */}
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
    color: 'red',
  }
});
