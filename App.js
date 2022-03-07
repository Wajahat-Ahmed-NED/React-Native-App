import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './src/screens/customComponents';
import FlatDemo from './src/screens/FlatDemo';
import Images from './src/screens/image';
import Buttons from './src/screens/Buttons';
import NetflixCard from './src/component/NetflixCard';

export default function App() {
  const ali = 23;
  return (

    <View style={styles.container}>
      <View style={styles.main1}>
        <Text style={styles.textStyle}>Header</Text>
      </View>
      <View style={styles.main2}>
        {/* <Text style={styles.textStyle}>Body</Text> */}
        <View style={styles.boxes}>
          <View style={styles.items}>
          </View>
          <View style={styles.items}>
          </View>
          <View style={styles.items}>
          </View>
          <View style={styles.items}>
          </View>
          <View style={styles.items}>
          </View>
          <View style={styles.items}>
          </View>
        </View>

      </View>
      <View style={styles.main3}>
        <Text style={styles.textStyle}>Footer</Text>

      </View>
      {/* <Text style={styles.textStyle}>Hello Wajahat Ahmed ye ma ho gullo</Text>
      <Text>my app.js {ali}</Text> */}
      {/* <CustomComponent /> */}
      {/* <FlatDemo /> */}
      {/* <Buttons /> */}
      {/* <Images /> */}
      {/* <NetflixCard /> */}
      {/* <StatusBar style="auto" /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//by default whole screen lega
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },

  main1: {
    backgroundColor: 'yellow',
    width: "100%",
    flex: 1
  },
  main2: {
    backgroundColor: 'red',
    width: "100%",
    flex: 8
  },
  main3: {
    backgroundColor: 'black',
    width: "100%",
    flex: 1
  },
  boxes: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  items: {
    marginBottom: 10,
    backgroundColor: 'white',
    width: 100,
    height: 100
  }
});
