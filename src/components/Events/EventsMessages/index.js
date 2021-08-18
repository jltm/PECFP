import React, { useState,useEffect } from 'react'
import { DIMENS_UI_ICONS_SMALL, HEIGHT } from '../../../dimensions'
import {Feather} from '@expo/vector-icons'
import {ScrollView,ChatHeader,ChatMessage,ChatUser,ChatNickName,ChatContent,DetailsWrapper,TimeStamp,StationName} from './styles'
export default function EventsMessages({data}) {

    const formatUser= (string)=>{
       let formatted= string.match(/\b(\w)/g).join('');
        return formatted
    }


    return (
                
        
                        <ScrollView>
                            {data.map(({id,data})=>(
                                <ChatMessage key={id}>
                                    <ChatHeader>
                                    <ChatUser>
                                        <ChatNickName numberOfLines={1}>{formatUser(data.userName)}</ChatNickName>
                                        </ChatUser>
                                    <ChatContent numberOfLines={3}>{data.content}</ChatContent>

                                    </ChatHeader>
                                    <DetailsWrapper>
                                        <StationName>{data.stationId}</StationName>
                                        <Feather name={'clock'} color={'#21305A'} size={DIMENS_UI_ICONS_SMALL} style={{alignSelf:'center'}}></Feather>
                                        <TimeStamp>{new Date(data.timeStamp?.toDate()).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</TimeStamp>
                                    </DetailsWrapper>

                                </ChatMessage>             
                            ))}
                        </ScrollView>       
                 

    )
}
