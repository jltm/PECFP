import React, { useState,useEffect, useRef } from 'react'
import { Text,View,Animated } from 'react-native'
import { DIMENS_UI_ICONS_MEDIUM, DIMENS_UI_ICONS_NAVIGATION, DIMENS_UI_ICONS_SMALL, HEIGHT } from '../../../dimensions'
import {Feather} from '@expo/vector-icons'
import {Header,HeaderLabel,Wrapper,Body,Container,ChatWrapper,ChatMessage,ChatIcon,ChatContent,DetailsWrapper,TimeStamp,Username,InputWrapper,TextInput,SendButton,SendPlaceholder,Filter,FilterLabel,FilterWrapper, CloseWrapper,CloseInnerWrapper,CloseLabel} from './styles'
import { createDeleteAlert, getMessages, insertEvent } from '../../../utils/functions'
import { TouchableOpacity } from 'react-native'
import {auth} from '../../../config/firebase'
import * as Dimensions from '../../../dimensions'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { onMessageShare } from './functions'

export default function ChatScreen({stationId,stationName,setShow,value}) {

    let marginBottom=Dimensions.HEIGHT*0.07+20
    const currentUser=auth.currentUser
    const [messages,setMessages]=useState([])
    const scrollview=useRef()
    const [message,setMessage]=useState('')
    const [margin,setMargin]=useState(marginBottom)
    const [longPressId,setLongPressId]=useState()

    const filters=[
        {
            id:0,
            label:'aviso',
            color:'orange'
        },
        {
            id:1,
            label:'acidente',
            color:'red'

        },
        {
            id:2,
            label:'atraso',
            color:'yellow'
        }
    ]

    const scrollToBottom=()=>{
        scrollview.current.scrollToEnd({animated:false})
    }

    useEffect(()=>{
        getMessages(stationId,setMessages)

    },[])

    useEffect(()=>{
        scrollToBottom()
    },[messages])

    
    const handleSubmit = (message)=>{

        Keyboard.dismiss()
        insertEvent(stationId,stationName,message)
        scrollToBottom()
        setMessage()

    }
    return (
 
        <Container>
        <TouchableWithoutFeedback onPress={()=>setLongPressId()}>
            <Animated.View style={{
                position:'absolute',
                height: Dimensions.HEIGHT*0.95,
                bottom:0,
                width:'100%',
                backgroundColor:'#FFF',
                borderTopLeftRadius:40,
                borderTopRightRadius:40,
                transform:[{translateY:value}]}}>
                    <Header>
                            <HeaderLabel>Reportar Eventos</HeaderLabel>
                            <CloseWrapper onPress={()=>{value.setValue(HEIGHT),setLongPressId()}}>
                                <CloseInnerWrapper>
                        
                                        <Feather name={"x"} color={"#21305A"} size={DIMENS_UI_ICONS_MEDIUM} style={{alignSelf:'center'}}></Feather>
                    
                                    <CloseLabel>Fechar</CloseLabel>
                                </CloseInnerWrapper>
                            </CloseWrapper>
                    </Header>
                        <Body ref={scrollview}>
                        
                                {
                                    messages.map(({id,data})=>(
                                    data.userId==currentUser.uid ?
                                    
                                        longPressId==id ?
                                            <ChatMessage style={{backgroundColor:'#679CFF'}}>
                                                <ChatWrapper>                         
                                                    <ChatContent style={{color:'#fff'}}>{"O que pretende fazer?"}</ChatContent>
                                                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                                    <TouchableOpacity onPress={()=>onMessageShare(data,stationName)}>
                                                        <Feather name={'share'} color={'#fff'} size={DIMENS_UI_ICONS_MEDIUM} style={{alignSelf:'center',marginLeft:10}}></Feather>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={()=>createDeleteAlert(id,stationId)}>
                                                        <Feather name={'trash'} color={'#fff'} size={DIMENS_UI_ICONS_MEDIUM} style={{alignSelf:'center',marginLeft:10}}></Feather>
                                                    </TouchableOpacity>
                                                    </View>
                                                </ChatWrapper>
                                            </ChatMessage>
                                        :
                                
                                        <ChatMessage key={id} onLongPress={()=>setLongPressId(id)} style={{backgroundColor:'#679CFF'}}>
                                            <ChatWrapper>                         
                                                <ChatContent style={{color:'#fff'}}>{data.content}</ChatContent>
                                            </ChatWrapper>
                                            <DetailsWrapper>
                                                <Username style={{color:'#fff'}}>{"Eu"}</Username>
                                                <Feather name={'clock'} color={'#fff'} size={DIMENS_UI_ICONS_SMALL} style={{alignSelf:'center'}}></Feather>
                                                <TimeStamp style={{color:'#fff'}}>{`${new Date(data.timeStamp?.toDate()).toLocaleTimeString()} ${new Date(data.timeStamp?.toDate()).toLocaleDateString()}`}</TimeStamp>
                                            </DetailsWrapper>

                                        </ChatMessage>
                                        
                            
                                    :  
                                        longPressId==id ?
                                        <ChatMessage style={{backgroundColor:'rgba(103, 156, 255,0.2)'}}>
                                            <ChatWrapper>                         
                                                <ChatContent style={{color:'#21305A'}}>{"O que pretende fazer?"}</ChatContent>
                                                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                                <TouchableOpacity onPress={()=>onMessageShare(data,stationName)}>
                                                    <Feather name={'share'} color={'#21305A'} size={DIMENS_UI_ICONS_MEDIUM} style={{alignSelf:'center',marginLeft:10}}></Feather>
                                                </TouchableOpacity>
                                                </View>
                                            </ChatWrapper>
                                        </ChatMessage>
                                        :      
                                        <ChatMessage key={id} onLongPress={()=>setLongPressId(id)} style={{backgroundColor:'rgba(103, 156, 255,0.2)'}}>
                                            <ChatWrapper>                         
                                                <ChatContent>{data.content}</ChatContent>
                                            </ChatWrapper>
                                            <DetailsWrapper>
                                                <Username>{data.userName}</Username>
                                                <Feather name={'clock'} color={'#21305A'} size={DIMENS_UI_ICONS_SMALL} style={{alignSelf:'center'}}></Feather>
                                                <TimeStamp>{` ${new Date(data.timeStamp?.toDate()).toLocaleTimeString()} ${new Date(data.timeStamp?.toDate()).toLocaleDateString()}`}</TimeStamp>
                                            </DetailsWrapper>

                                        </ChatMessage>

                                    ))
                                }
                    
                        </Body>
                    
                    <InputWrapper>
                            
                                <TextInput
                                placeholder="Insira o seu evento..." 
                                placeholderTextColor="grey"
                                type="text"
                                value={message}
                                onChangeText={(text)=>{setMessage(text)}}
                                onEndEditing={()=>{Keyboard.dismiss}}
                                style={{flex:1}}></TextInput>

                                {message ?
                                <SendButton onPress={()=>handleSubmit(message)}>
                                    <Feather name={'send'} color={"#679CFF"} size={DIMENS_UI_ICONS_NAVIGATION}></Feather>
                                </SendButton>
                                :
                                <SendPlaceholder>
                                    <Feather name={'send'} color={"#ccc"} size={DIMENS_UI_ICONS_NAVIGATION}></Feather>
                                </SendPlaceholder>
                                }
                    
                    </InputWrapper>
            </Animated.View>
        </TouchableWithoutFeedback>
        </Container>


    )
}
