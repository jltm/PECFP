import React,{useState,useEffect, useRef} from 'react';
import MapBackground from '../../components/Maps/MapView';
import * as Location from 'expo-location'
import {updateLocation,getMapDatabyCity,getCityFromCoordinates,getFilters} from "../../utils/functions"
import { updateLocalMapDta } from './functions';

export default function Map(){

  const[loading,setLoading]=useState(true)
  const[mode,setMode]=useState("drive")
  const [selectedCity,setCity]= useState('')
  const previousCity= useRef({actual})
  const [stationsInfo,setStationsInfo]=useState([])
  const [filters,setFilters]= useState([])
  const [actual,setActual]= useState('')
  const [initial,setInitial]= useState(true)
  const [locked,setLocked]= useState(false)
  const [location,setLocation] = useState(
    { latitude:null, 
      longitude:null,
    }
      )

  const getData = () =>{
    if(location.latitude!=null){
      getCityFromCoordinates(location,setLoading).then(city=>{

          if(initial!==true){ //selectedCity!==city-->
            updateLocalMapDta(stationsInfo,location,mode,setStationsInfo)
          }else{
            setCity(city)
            setInitial(false)
          }
      setActual(city)
      
      })
    }
  }

  useEffect(()=>{
       if(initial==true){
        updateLocation(Location,setLocation);
       }
        
     
  },[])

    useEffect(()=>{
        {
        previousCity.current.actual=actual
        if(initial!==true){
          setLocked(true)
        }
        getData()
        }
   

    },[location])
    
    useEffect(()=>{
      if(selectedCity){

      //setCity('')
      setLocked(false)
      getMapDatabyCity(setStationsInfo,selectedCity,location,mode);
      setCity(selectedCity)
      }
    },[selectedCity])

    
    useEffect(()=>{
      getFilters(setFilters)   
    },[])

    return (
   
      <>
        <MapBackground
    
          location={location}
          setLocation={setLocation}
          data={stationsInfo}
          setData={setStationsInfo}
          filters={filters}
          selectedCity={selectedCity}
          setCity={setCity}
          locked={locked}
          setLocked={setLocked}
          previousCity={previousCity}
          actual={actual}>

          </MapBackground>
      
      </>

  
          

    );
}