import React,{useState,useEffect} from 'react';
import { Text } from 'react-native';
import {View} from 'react-native'
import { Container,Body, TopHalf, BottomHalf, TopLayer,LoadingDiv } from './styles';
import Header from '../../components/Home/Header'
import NearestCarousel from '../../components/Home/NearestCarousel';
import * as Location from 'expo-location'
import {updateLocation} from '../../utils/functions';
import {getNearby,getCityFromCoordinates,handleLoadingStatus} from "../../utils/functions"
import { DIMENS_H2, DIMENS_H3, DIMENS_LABELS, HEIGHT, WIDTH } from '../../dimensions';
import {LoadingPlaceholder} from '../../components/Placeholders/LoadingPlaceholder';
import { useFocusEffect } from '@react-navigation/core';

export default function Home(){

    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [nearby,setNearby]=useState([])
    const [currentLocation,setCurrentLocation] = useState(
        { latitude:null, 
          longitude:null}
          )
    const [currentCity,setCurrentCity]=useState("")

    const getData = () =>{
      if(currentLocation.latitude!=null){
        getCityFromCoordinates(currentLocation,setLoading).then(city=>{
    
            getNearby(currentLocation,city,"drive",setNearby,setLoading)   
        })
      }
      }

      useFocusEffect(   
        React.useCallback(() => {
            updateLocation(Location,setCurrentLocation);
          }, [])
        
    );

      useFocusEffect(   
        React.useCallback(() => {
              getData()
        }, [currentLocation])
        
    );

      useEffect(()=>{
        handleLoadingStatus(nearby,setLoading)
    
      },[nearby])

    return (

    <Body>
        <Container>
            <TopHalf>

                <Header
                location={currentLocation}></Header>

            </TopHalf>

            <BottomHalf>
                <TopLayer>

                <View style={{marginTop:70}}>
                    <Text style={{marginLeft:20,fontWeight:'bold',fontSize:DIMENS_H2}}>Com base na sua Localização</Text>
                        {loading ?((

                        <LoadingPlaceholder></LoadingPlaceholder>
                
                        )):((
                    
                    
                        <NearestCarousel
                        data={nearby}
                        location={currentLocation}>
                            
                        </NearestCarousel>
                        ))}
                    </View>
                </TopLayer>
            </BottomHalf>


        </Container>
    </Body>

    );
}