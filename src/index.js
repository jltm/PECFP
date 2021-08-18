import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import {StatusBar} from 'react-native'
import {enableScreens} from 'react-native-screens'

enableScreens();

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#000"></StatusBar>
    <NavigationContainer>
      <AuthStack></AuthStack>
    </NavigationContainer>
    </>
  );
}
