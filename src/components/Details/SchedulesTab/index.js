import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Departures from './departures'
import Arrivals from './arrivals'

const Tab = createMaterialTopTabNavigator();

export default function MyTabs({departures,arrivals}) {
  return (
    <Tab.Navigator
    tabBarOptions={{
      style:{
          backgroundColor: '#FFF',
          borderRadius:8,
          marginLeft:20,
          marginRight:20,
          elevation:0,
          shadowOpacity:0
      },
      activeTintColor:'#679CFF',
      inactiveTintColor:'#21305A',
      indicatorStyle:{
        backgroundColor:"transparent"
      }
      }}>
      <Tab.Screen name="Partidas" children={()=><Departures departures={departures}/>} />
      <Tab.Screen name="Chegadas" children={()=><Arrivals arrivals={arrivals}/>} />
    </Tab.Navigator>
  );
}