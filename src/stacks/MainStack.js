import React from 'react';
import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Feather} from '@expo/vector-icons';
import * as Dimensions from '../dimensions'

import HomeScreen from '../screens/Home'
import MapScreen from '../screens/Maps'
import EventsScreen from '../screens/Events'
import HistoricInfoScreen from '../screens/HistoricInfo'
import SearchScreen from '../screens/Search'
import DetailsScreen from '../screens/Details'
import ProfileScreen from '../screens/Profile'
import UpdateScreen from '../screens/Update'

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const EventsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const icons={
    Home:{
        lib:Feather,
        name:'home',
    },
    Map:{
        lib:Feather,
        name:'navigation',
    },
    Notifications:{
        lib:Feather,
        name:'alert-circle',
    },
    HistoricInfo:{
        lib:Feather,
        name:'book-open',
    },
    Profile:{
        lib:Feather,
        name:'user'
    }
};

export function TabNavigation(){
    return (
        <Tab.Navigator
        screenOptions ={({route,navigation})=>({
            tabBarIcon: ({color,size}) => {
                const {lib:Icon,name} = icons[route.name]
                return <Icon name={name} size={Dimensions.DIMENS_UI_ICONS_NAVIGATION} color={color}></Icon>
            },
        })} 
        tabBarOptions={{
            style:{
                backgroundColor: '#fff',
                borderTopColor:'rgba(255,255,255,0.2)',
                height:Dimensions.HEIGHT*0.07,
                position:'absolute',
                borderRadius:20,
                margin:10,
                elevation:7
            },
            showLabel:false,
            activeTintColor:'#679CFF',
            keyboardHidesTabBar:true
        }}  
        >
            <Tab.Screen 
            name="Home" 
            component={HomeStackScreen}
            options={{
                title:'Inicio'
            }}
            />

            <Tab.Screen 
            name="Map" 
            component={MapStackScreen}
            options={{
                title:'Localizar'
            }}
            />

            <Tab.Screen 
            name="Notifications" 
            component={EventsStackScreen}
            options={{
                title:'Notificações'
            }} 
            />

            <Tab.Screen 
            name="HistoricInfo" 
            component={HistoricInfoScreen}
            options={{
                title:'História'
            }} 
            />

            <Tab.Screen 
            name="Profile" 
            component={ProfileStackScreen}
            options={{
                title:'Perfil'
            }} 
            />

        
        </Tab.Navigator>
    
    );
}

export function HomeStackScreen({navigation,route}){

    if(route.state && route.state.index>0){
        navigation.setOptions({tabBarVisible:false})
    }else{
        navigation.setOptions({tabBarVisible:true})
    }

    return(
    <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:false
            }}>
                <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
                <HomeStack.Screen name="Search" component={SearchScreen}></HomeStack.Screen>
                <HomeStack.Screen name="Details" component={DetailsScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
)

}


export function MapStackScreen({route,navigation}){

    if(route.state && route.state.index>0){
        navigation.setOptions({tabBarVisible:false})
    }else{
        navigation.setOptions({tabBarVisible:true})
    }

    return(
    <MapStack.Navigator
            initialRouteName="Map"
            screenOptions={{
                headerShown:false
            }}>
                <MapStack.Screen name="Map" component={MapScreen}></MapStack.Screen>
                <MapStack.Screen name="Details" component={DetailsScreen}></MapStack.Screen>
                
    </MapStack.Navigator>
)

}

export function ProfileStackScreen(){
    

    return(
    <ProfileStack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown:false
            }}>
                <ProfileStack.Screen name="Profile" component={ProfileScreen}></ProfileStack.Screen>
                <ProfileStack.Screen name="Update" component={UpdateScreen}></ProfileStack.Screen>
                
    </ProfileStack.Navigator>
)

}

export function EventsStackScreen({route,navigation}){
    if(route.state && route.state.index>0){
        navigation.setOptions({tabBarVisible:false})
    }else{
        navigation.setOptions({tabBarVisible:true})
    }
    return(
        <EventsStack.Navigator
                initialRouteName="Notifications"
                screenOptions={{
                    headerShown:false
                }}>
                    <ProfileStack.Screen name="Notifications" component={EventsScreen}></ProfileStack.Screen>
                    <ProfileStack.Screen name="Details" component={DetailsScreen}></ProfileStack.Screen>
                    
        </EventsStack.Navigator>
    )
}
