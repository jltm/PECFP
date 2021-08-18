import React,{useEffect, useState,useRef} from 'react';
import MapView,{Marker} from 'react-native-maps'
import StationsCarousel from '../../../components/Maps/StationsCarousel'
import FilterCarousel from '../../../components/Maps/FilterCarousel'
import CustomMarker from '../../../components/Maps/CustomMarker'
import {updateRegiontoSelected} from './functions'
import { Button } from 'react-native';
import { getMapDatabyCity } from '../../../utils/functions';
import { View } from 'react-native';

export default function MapBackground({location,data,setData,filters,selectedCity,setCity,locked,setLocked,previousCity,actual}){

  const mapview = useRef()
  const [state,setState]=useState(
    { latitude:null, 
      longitude:null
    }
      )
  const [showCarousel,setShowCarousel]= useState(true)
  const [placeId,setPlaceId]= useState(null)
  const handleMarkerPress=(placeId,setShowCarousel)=>{
      setPlaceId(placeId)
      setShowCarousel(true)
  }
  useEffect(()=>{


    if(!locked){
    
      setState(
          {
              latitude:location.latitude,
              longitude:location.longitude
          }) 
      }

      

  },[location])

  useEffect(()=>{
  
    updateRegiontoSelected(data,placeId,setState)

  },[placeId])

  
  useEffect(()=>{
  
 
  if(!locked){
    mapview.current.animateCamera(
      {
        center: {
          latitude: state.latitude,
          longitude: state.longitude

        },
        zoom: 12
      },
      5000
    );
    }
  
    
  },[state])

    return (


      <>
  
        <MapView onPress={()=>{setShowCarousel(false); setPlaceId()}} style={{flex:1}}
          ref={mapview}

          showsUserLocation={true}
         >

          {data.map(({data,id})=>(
              <Marker key={id}  tracksViewChanges={false} onPress={()=>handleMarkerPress(id,setShowCarousel)}

              coordinate={{
                latitude:parseFloat(data.lat), 
                longitude:parseFloat(data.long)}}>
          
                <CustomMarker
                currentId={placeId}
                id={id}>
                </CustomMarker>
              </Marker>
          ))}
  
          </MapView>

          <StationsCarousel   //component importado do stationCarousel
            placeId={placeId}
            setPlaceId={setPlaceId}
            show={showCarousel}
            setShow={setShowCarousel}
            data={data}
            location={location}
            setState={setState}
            setLocked={setLocked}
          >

          </StationsCarousel>
          
          <FilterCarousel
          filters={filters}
          selectedCity={selectedCity}
          setCity={setCity}
          data={data}
          location={location}
          setData={setData}
          setState={setState}
          setPlaceId={setPlaceId}
          locked={locked}
          setLocked={setLocked}
          previousCity={previousCity}
          actual={actual}
       >

          </FilterCarousel>

    
          </>
        
    );
}