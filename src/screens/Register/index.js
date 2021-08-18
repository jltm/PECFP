import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import RegisterForm from '../../components/Auth/RegisterForm';
import {SafeAreaView,TopHalf,MiddleHalf,BottomHalf,TopInnerLayer,BottomInnerLayer,Button,ButtonLabel,HeaderLabel,HeaderWrapper} from './styles'; 
import Logo from '../../../assets/ui/logo.png'
import { Image } from 'react-native';
import {auth} from '../../config/firebase'

export default function Register(){

    const navigation=useNavigation();
    return (
    
       <SafeAreaView>
            <TopHalf>
                                                        
                <TopInnerLayer>
                    <HeaderWrapper>
                        <Image style={{width:40,height:40,alignSelf:'center'}} source={Logo}></Image>
                        <HeaderLabel>PECFP</HeaderLabel>
                    </HeaderWrapper>
                
                </TopInnerLayer>
            </TopHalf>
            <MiddleHalf>
                <RegisterForm></RegisterForm>
            </MiddleHalf>
            <BottomHalf>
                <BottomInnerLayer>
                    <Button title="Login" onPress={() => navigation.navigate('Login')}>
                        <ButtonLabel>Voltar</ButtonLabel>
                    </Button>
                    
            </BottomInnerLayer>
            </BottomHalf>
    
        </SafeAreaView>

    );
}