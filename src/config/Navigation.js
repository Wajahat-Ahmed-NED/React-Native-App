import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import { Image } from 'react-native-web';

const Stack = createNativeStackNavigator()

export default function Navigation() {
        return (
                <NavigationContainer>
                        <Stack.Navigator>
                                <Stack.Screen name="Home" component={Home} options={{
                                        title: 'Welcome',
                                        // headerStyle: {
                                        //         backgroundColor: 'orange'
                                        // },
                                        headerTitle: props => <Image style={{ height: 80, width: 80, resizeMode: 'contain' }} source={{ uri: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg" }} />
                                }}

                                />
                                <Stack.Screen name="About" component={About} />
                                <Stack.Screen name="Contact" component={Contact} />
                        </Stack.Navigator>
                </NavigationContainer>
        )
}