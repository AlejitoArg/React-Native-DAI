import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen.js';
import HomeScreen from './HomeScreen.js';
import PlatosScreen from './PlatosScreen.js';
import AgregarPlato from './AgregarPlato.js';

const Stack = createNativeStackNavigator();

export default function MyStack(){
    return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Log in"
            component={LoginScreen}
        />
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="PlatosScreen"
            component={PlatosScreen}
        />
        <Stack.Screen
            name="AgregarPlato"
            component={AgregarPlato}
        />
        </Stack.Navigator>
    </NavigationContainer>
    );
};