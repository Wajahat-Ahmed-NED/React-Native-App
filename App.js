import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomComponent from './src/screens/customComponents';
import FlatDemo from './src/screens/FlatDemo';
import Images from './src/screens/image';
import Buttons from './src/screens/Buttons';
import NetflixCard from './src/component/NetflixCard';
import { FlatList } from 'react-native';
import { ImageBackground } from 'react-native';
import { ActivityIndicator } from 'react-native-web';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Navigation from './src/config/Navigation';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];
export default function App() {
  const ali = 23;
  return (
    <>

      {/* // style={styles.container}
      > */}
      {/* <ImageBackground style={{ width: '100%', height: "100%" }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHHIoxqXkjI1wawcoWD1E1Xzq4KUl8Mdnsw&usqp=CAU" }}>
          <Text style={styles.textStyle}>Wajahat Ahmed</Text>
          <ActivityIndicator size="large" color="blue" />
        </ImageBackground> */}

      {/* <Home /> */}

      <Navigation />
      {/* <View style={styles.main1}>
        <Text style={styles.textStyle}>Header</Text>
      </View> */}
      {/* <View style={styles.main2}>
        
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
          </View> */}
      {/* </View> */}

      {/* </View> */}
      {/* <View style={styles.main3}>
        <Text style={styles.textStyle}>Footer</Text> */}

      {/* </View> */}
      {/* <Text style={styles.textStyle}>Hello Wajahat Ahmed ye ma ho gullo</Text>
      <Text>my app.js {ali}</Text> */}
      {/* <CustomComponent /> */}
      {/* <FlatDemo /> */}
      {/* <Buttons /> */}
      {/* <Images /> */}
      {/* <NetflixCard /> */}
      {/* <StatusBar style="auto" /> */}

      {/* {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
            return (
              <View style={styles.card}>
                <Text style={styles.textStyle}>
                  Wajahat Ahmed
                </Text>
              </View>

            )
          })
        } */}

      {/* <FlatList
          data={DATA}
          renderItem={(data) => {
            return (
              <View style={styles.card}>
                <Text style={styles.textStyle}>
                  {data.item.title}
                </Text>
              </View>
            )
          }}
          keyExtractor={item => item.id}
        /> */}

      {/* </> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//by default whole screen lega
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20
  },
  card: {
    margin: 20,
    height: 200,
    backgroundColor: "black",
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  textStyle: {

    color: 'white',
    fontSize: 24,

    textAlign: 'center'
  },

  // main1: {
  //   backgroundColor: 'yellow',
  //   width: "100%",
  //   flex: 1
  // },
  // main2: {
  //   backgroundColor: 'red',
  //   width: "100%",
  //   flex: 8
  // },
  // main3: {
  //   backgroundColor: 'black',
  //   width: "100%",
  //   flex: 1
  // },
  // boxes: {
  //   flex: 1,
  //   marginTop: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   flexWrap: 'wrap',
  //   alignContent: 'center'
  // },
  // items: {
  //   marginBottom: 10,
  //   backgroundColor: 'white',
  //   width: 100,
  //   height: 100
  // }
});
