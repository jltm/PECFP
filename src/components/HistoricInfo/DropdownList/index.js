import React, { useEffect } from 'react';
import {View } from 'react-native';
import {HeaderWrapper,YearWrapper,YearLabel,Wrapper,Body, Dropdown, HeaderLabel, InnerDiv,Image, TitleLabel, DescriptionLabel,Indicator} from './styles'
import { useState } from 'react';
import {Feather} from '@expo/vector-icons'


export default function DropdownList({data}){
    
  const [selected,setSelected]=useState()
  const [visible,setVisible]=useState(false)

  const handleDropDownAction=(id)=>{
    if(id==selected){
      setSelected("")
      setVisible(false)
    }
    else{
      setSelected(id)
      setVisible(true) 
    }
  }


    return(

      <Wrapper>
        {data.map(({id,data})=>(
          <View>
            <Dropdown onPress={()=>handleDropDownAction(id)}>
              <HeaderWrapper>
                  <YearWrapper>    
                    <YearLabel numberOfLines={1}>{data.year}</YearLabel> 
                  </YearWrapper>  
              <HeaderLabel numberOfLines={3}>{data.title}</HeaderLabel> 
              { selected==id ?
              <Indicator>
              <Feather name={"chevron-up"} color={"#679CFF"} size={37}></Feather> 
              </Indicator>
              :
              <Indicator>
              <Feather name={"chevron-down"} color={"#679CFF"} size={37}></Feather> 
              </Indicator>
               
              }
              </HeaderWrapper> 
            </Dropdown>  
                    <Body>
                    {selected==id && visible ? 
                
        
                      <InnerDiv>
                        <Image source={{uri:data.imgSrc}}></Image>
                        <DescriptionLabel>{data.description}</DescriptionLabel>
                      </InnerDiv>
                    
                    :null} 
                    </Body>
            </View>
        ))}
        </Wrapper>
    )}
