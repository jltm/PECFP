import React, { useEffect, useState } from 'react'
import { View,Text } from 'react-native'
import { InputWrapper,TextInput,LoginButton,ButtonLabel,ButtonWrapper,ErrorWrapper,ErrorLabel } from './styles'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { handleRegister } from '../functions'
import { DIMENS_UI_ICONS_MEDIUM, DIMENS_UI_ICONS_SMALL } from '../../../dimensions'



export default function RegisterForm(){

    const navigation=useNavigation();
    const [error,setError]=useState("");

    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    return (
        <View>
            <InputWrapper>
                <TextInput 
                placeholder="Insira o seu nome de perfil" 
                placeholderTextColor="#fff"
                type="text"
                value={username}
                onChangeText={(text)=>setUsername(text)}
                ></TextInput>
            </InputWrapper>
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
                onSubmitEditing={()=>handleRegister(username,email,password,setError)}
                ></TextInput>
            </InputWrapper>
            {error ? 
            <ErrorWrapper>     
                <Feather  name={'alert-circle'} color={"#fff"} size={DIMENS_UI_ICONS_MEDIUM}></Feather>
                <ErrorLabel>{error}</ErrorLabel>
            </ErrorWrapper>
            :null}
            <LoginButton onPress={()=>handleRegister(username,email,password,setError)}>
                <ButtonWrapper>
                    <ButtonLabel>Registar</ButtonLabel>
                    <Feather name={"arrow-right-circle"} size={20} color={"#679CFF"}></Feather>
                </ButtonWrapper>         
            </LoginButton>
            

        </View>
    )
}