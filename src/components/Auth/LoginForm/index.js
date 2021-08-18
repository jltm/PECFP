import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { InputWrapper,TextInput,LoginButton,ButtonLabel,ButtonWrapper,ErrorWrapper,ErrorLabel } from './styles'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import {handleLogin} from '../functions'
import { DIMENS_UI_ICONS_MEDIUM } from '../../../dimensions'

export default function LoginForm(){

    const navigation=useNavigation();
    const [error,setError]=useState("")

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    return (
        <View>

            <InputWrapper>
                <TextInput 
                placeholder="Insira o seu email..." 
                placeholderTextColor="#fff"
                type="email"
                value={email}
                onChangeText={(text)=>setEmail(text)}
                ></TextInput>
            </InputWrapper>
            <InputWrapper>
                <TextInput 
                placeholder="Insira a sua password..." 
                placeholderTextColor="#fff"
                secureTextEntry={true}
                type="password"
                value={password}
                onChangeText={(text)=>setPassword(text)}
                onSubmitEditing={()=>handleLogin(email,password,setError)}
                ></TextInput>
            </InputWrapper>
            {error ?      
            <ErrorWrapper>
                <Feather  name={'alert-circle'} color={"#fff"} size={DIMENS_UI_ICONS_MEDIUM}></Feather>
                <ErrorLabel>{error}</ErrorLabel>
            </ErrorWrapper>
            :null}
            
            
            <LoginButton onPress={()=>handleLogin(email,password,setError)}>
                <ButtonWrapper>
                    <ButtonLabel>Iniciar Sessão</ButtonLabel>
                    <Feather name={"arrow-right-circle"} size={20} color={"#679CFF"}></Feather>
                </ButtonWrapper>         
            </LoginButton>
            

        </View>
    )
}