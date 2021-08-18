import React, { useEffect, useState,Component } from 'react';
import { Container,Body, TopHalf, BottomHalf, TopLayer,ImageContainer,Label,Dropdown } from './styles';
import Header from '../../components/HistoricInfo/Header'
import {getHistoricInfo} from '../../utils/functions'
import DropdownList from '../../components/HistoricInfo/DropdownList';

export default function HistoricInfo(){

  const [HistoricInfo,setHistoricInfo]=useState([])

  useEffect(()=>{
    getHistoricInfo(setHistoricInfo)
  },[])

    return (
        <Body>
        <Container>
            <TopHalf>

                <Header></Header>

            </TopHalf>

            <BottomHalf>
                <TopLayer>
            
                      <DropdownList
                      data={HistoricInfo}
                        />                 
                      
                </TopLayer>  
            </BottomHalf>


        </Container>
    </Body>

    );
}
