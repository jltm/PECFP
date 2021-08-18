import React from 'react';
import { Text,Button } from 'react-native';
import {View} from 'react-native'
import { Container,Body, TopHalf, BottomHalf, TopLayer,ImageContainer,Label,SubscriptionsWrapper,SubscriptionsLabel } from './styles';
import Header from '../../components/Events'
import {useState,useEffect} from 'react'
import {getUserSubscriptionsInfo } from '../../utils/functions';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import EventsMessages from '../../components/Events/EventsMessages';
import { HEIGHT } from '../../dimensions';
export default function Notifications(){

    const navigation= useNavigation()
    const [messages,setMessages]=useState([])
    const [stations,setStations]=useState([])

    useFocusEffect(   
        React.useCallback(() => {
            getUserSubscriptionsInfo(setMessages,setStations)
          }, []) 
    );

    return (
        <Body>
        <Container>
            <TopHalf>
                <Header></Header>

            </TopHalf>

            <BottomHalf>
                <TopLayer>

               <View style={{marginBottom:HEIGHT*0.07+20}}>
                    <Label>{"Eventos Recentes"}</Label>
                        <EventsMessages
                        data={messages}>
                        </EventsMessages>
                    <Label>{"Todas as subscrições"}</Label>

                    {stations.map(({id,data})=>(

                        <SubscriptionsWrapper onPress={()=>navigation.navigate('Details',{id:id,chat:true})}>
                        <SubscriptionsLabel>{data}</SubscriptionsLabel>
                        </SubscriptionsWrapper>
                    ))}
                </View> 
                </TopLayer>  
            </BottomHalf>


        </Container>
    </Body>

    );
}