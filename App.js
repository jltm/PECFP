import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox,LogBox } from 'react-native';

import App from './src'

YellowBox.ignoreWarnings(['Setting a timer']);
//LogBox.ignoreAllLogs();

export default function Main(){
  return <App/>;
}