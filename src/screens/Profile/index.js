import React from 'react'

import {View,Text} from 'react-native'
import {Container,SafeAreaView,Header,InnerWrapper,InnerLayer,Body,ProfileDiv,ProfileAvatar,ProfileWrapper,ProfileName,ProfileEmail,OptionIcon,OptionsButton,OptionsLabel, HeaderLabel, BottomHalf, TopLayer} from './styles.js'
import {Feather} from '@expo/vector-icons'
import {auth} from '../../config/firebase'
import { useNavigation } from '@react-navigation/native'
import { signOut } from '../../components/Auth/functions.js'
import AuthStack from '../../stacks/AuthStack' 

export default function Profile(){
    
    const formatUser= (string)=>{
        let formatted= string.match(/\b(\w)/g).join('');
         return formatted
     }
 
    const currentUser= auth.currentUser

    const navigation=useNavigation();
    return (
        <Body>
        <Container>
  
            <Header>
                <HeaderLabel>Conta</HeaderLabel>
            </Header>

            <BottomHalf>

                <TopLayer>
            
                <InnerLayer>
                    <ProfileDiv>
                        <ProfileAvatar>
                            <Text>{formatUser(currentUser.displayName)}</Text>
                        </ProfileAvatar>
                        <ProfileWrapper>
                                <ProfileName>{currentUser.displayName}</ProfileName>
                                <ProfileEmail>{currentUser.email}</ProfileEmail>
                        </ProfileWrapper>
                    </ProfileDiv>
                    <InnerWrapper>
                    <OptionsButton onPress={()=>navigation.navigate('Update',{user:currentUser.displayName})}>
                        <OptionIcon>
                            <Feather name={'user-check'} color={'#21305A'} size={20}></Feather>
                        </OptionIcon>
                        <OptionsLabel>Atualizar Informações de conta</OptionsLabel>
                    </OptionsButton>
                    <OptionsButton onPress={()=>signOut(navigation,AuthStack)}>
                        <OptionIcon>
                            <Feather name={'log-out'} color={'#21305A'} size={20}></Feather>
                            </OptionIcon>
                        <OptionsLabel>Terminar sessão</OptionsLabel>
                    </OptionsButton>
                    </InnerWrapper>
                </InnerLayer>
                </TopLayer>
                </BottomHalf>   
        </Container>
        </Body>
    )
}