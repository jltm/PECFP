import React from 'react';
import{ createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register'
import { TabNavigation } from './MainStack'

const Stack = createStackNavigator();



export default function AuthStack(){
    return (
    <Stack.Navigator   
    initialRouteName="Login"
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="MainStack" component={TabNavigation}></Stack.Screen>
    </Stack.Navigator>
    );
}