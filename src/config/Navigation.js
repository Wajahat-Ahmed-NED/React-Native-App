import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Stack = createNativeStackNavigator()

export default function Navigation() {
        return (
                <NavigationContainer>
                        <Stack.Navigator>
                                <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
                                <Stack.Screen name="About" component={About} />
                                <Stack.Screen name="Contact" component={Contact} />
                        </Stack.Navigator>
                </NavigationContainer>
        )
}