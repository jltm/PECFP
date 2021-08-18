import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import {SafeAreaView,TopHalf,MiddleHalf,BottomHalf,TopInnerLayer,BottomInnerLayer,Button,ButtonLabel,HeaderLabel,HeaderWrapper} from './styles'; 
import Logo from '../../../assets/ui/logo.png'
import { Image } from 'react-native';
import {auth} from '../../config/firebase'
import {checkSessionStatus} from '../../utils/functions'
import { View } from 'react-native';

export default function Login(){
    const navigation=useNavigation();
    const [auth,setAuth]=useState(false)

    useEffect(()=>{
        checkSessionStatus(navigation,setAuth)
    },[])
    return (
    
       <SafeAreaView>
        {auth ?
           <>
              
                <TopHalf>
                                                            
                    <TopInnerLayer>
                        <HeaderWrapper>
                            <Image style={{width:40,height:40,alignSelf:'center'}} source={Logo}></Image>
                            <HeaderLabel>PECFP</HeaderLabel>
                        </HeaderWrapper>
                    
                    </TopInnerLayer>
                </TopHalf>
                <MiddleHalf>
                    <LoginForm>

                    </LoginForm>
                </MiddleHalf>
                <BottomHalf>
                    <BottomInnerLayer>
                        <Button title="Login" onPress={() => navigation.navigate('Register')}>
                            <ButtonLabel>Criar Conta</ButtonLabel>
                        </Button>
                        
                </BottomInnerLayer>
                </BottomHalf>
               
            </>
        :null}
    
    
        </SafeAreaView>

    );
}