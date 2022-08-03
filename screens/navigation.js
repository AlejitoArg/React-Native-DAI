import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen.js';
import HomeScreen from './HomeScreen.js';
import IngresoPrenda from './ingresoPrenda.js';

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
            name="IngresoPrenda"
            component={IngresoPrenda}
        />
        </Stack.Navigator>
    </NavigationContainer>
    );
};