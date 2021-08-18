import React,{useState,useEffect} from 'react'
import { View ,Button} from "react-native";
import {ScrollViewWrapper,ScrollView,FilterHeader,Filter,FilterLabel,ResetWrapper,ResetButton,ResetButtonLabel} from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import {filterSort, greatherThan, updateRegionbyFilter} from './functions'
import { getMapDatabyCity } from '../../../utils/functions';
import { TouchableOpacity } from 'react-native';
import { DIMENS_UI_ICONS_MEDIUM } from '../../../dimensions';
import { updateLocalMapDta } from '../../../screens/Maps/functions';
import { Text } from 'react-native';

export default function FilterCarousel({filters,selectedCity,setCity,data,location,setData,setState,setPlaceId,locked,setLocked,previousCity,actual}){

    const [selectedFilter,setSelectedFilter]= useState()
    const [selectedDFilter,setSelectedDFilter]= useState()
    const [dummy,setDummy]= useState()

    const distanceFilters=[
      {
        id:1,
        label:"< 10km",
        limit:10000
      },
      {
        id:2,
        label:"< 20km",
        limit:20000
      },
      {
        id:3,
        label:"< 50km",
        limit:50000
      },
      {
        id:4,
        label:"< 100km",
        limit:100000

      },
      {
        id:5,
        label:"Limpar",
        limit:100000000

      }
    ]


    useEffect(()=>{
        setDummy()
     
    },[selectedCity])
    
    const handleSelect = (selectedId,city) =>{
        setCity(city)
        setSelectedFilter(selectedId)
        setSelectedDFilter()   
        setDummy()
        setLocked(false)
        
    }

    const handleSelect2= (id,limit)=>{
        setSelectedDFilter(id)
        if(limit==0){
          setSelectedDFilter()
        }
        greatherThan(data,dummy,setDummy,limit,setData)
    }

    useEffect(()=>{
   
      if(!locked){
      
        updateRegionbyFilter(data,setState,setPlaceId);
      }else{
        console.log("Nao moveu a camara")
      }
        filterSort(filters,selectedFilter)
  
    },[data])

    useEffect(()=>{

      updateLocalMapDta(dummy,location,"drive",setDummy)

    },[location])



    return(
      <>
       <ScrollViewWrapper>
          <ScrollView>
          <FilterHeader>
              <Feather name={"filter"} color={'#fff'} size={20}></Feather>
          </FilterHeader>
          { filters.map(({data,id})=>(
            data.name!==actual?
              selectedFilter==id ?
                <Filter key={id} onPress={()=>handleSelect(id,data.name)} style={{backgroundColor:'#679CFF'}}>
                <FilterLabel style={{color:'#FFF'}}>{data.name}</FilterLabel>
                </Filter>
                :
                <Filter key={id} onPress={()=>handleSelect(id,data.name)} style={{ backgroundColor:'rgba(103, 156, 255,0.2)'}}>
                <FilterLabel style={{color:'#21305A'}}>{data.name}</FilterLabel>
                </Filter>
            :null
            ))
            }
                
            </ScrollView>
            <ScrollView>
            <FilterHeader>
              <MaterialCommunityIcons name={"map-marker-distance"} color={'#fff'} size={20}></MaterialCommunityIcons>
            </FilterHeader>
                { distanceFilters.map((item)=>(
                selectedDFilter==item.id ?

                <Filter key={item.id} onPress={()=>handleSelect2(item.id,item.limit)} style={{ backgroundColor:'#679CFF'}}>
                  <FilterLabel style={{color:'#FFF'}}>{item.label}</FilterLabel>
                </Filter>
                
                :
                  !selectedDFilter ?
                    item.id!=5 ?
                
                      <Filter key={item.id} onPress={()=>handleSelect2(item.id,item.limit)} style={{ backgroundColor:'rgba(103, 156, 255,0.2)'}}>
                        <FilterLabel style={{color:'#21305A'}}>{item.label}</FilterLabel>
                      </Filter>
                    :null
                  :

                  <Filter key={item.id} onPress={()=>handleSelect2(item.id,item.limit)} style={{ backgroundColor:'rgba(103, 156, 255,0.2)'}}>
                      <FilterLabel style={{color:'#21305A'}}>{item.label}</FilterLabel>
                  </Filter>
         
                
              
            ))       
            }
            </ScrollView>
        </ScrollViewWrapper>

         { selectedCity!==actual && selectedCity!=="" ?
            <ResetWrapper>
                <ResetButton  onPress={()=>{
                  setLocked(false)
                  setSelectedFilter('')
                  setDummy()
                  setSelectedDFilter()
                  setCity(actual)
                  }}>

                    <MaterialCommunityIcons name={'target'} size={DIMENS_UI_ICONS_MEDIUM} color={'#fff'} style={{marginRight:5}}></MaterialCommunityIcons>
                    <ResetButtonLabel>{'Voltar a '+actual}</ResetButtonLabel>

                  </ResetButton>
            </ResetWrapper>
         : null
         }


      </>

    )
}