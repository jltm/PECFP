import React, {useState } from 'react'
import { InputWrapper,TextInput,LoginButton,ButtonLabel,ButtonWrapper,ErrorWrapper,ErrorLabel } from './styles'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {handleInfoUpdate} from '../functions'
import { DIMENS_UI_ICONS_MEDIUM } from '../../../dimensions'
export default function UpdateForm({user}){

    const currentUser = user
    const navigation=useNavigation();
    const [error,setError]=useState("")

    const [newUserName,setNewUserName]=useState(currentUser)
    const [newPassword,setNewPassword]=useState("")


    return (
      
        <>
            <InputWrapper>
                <TextInput 
                placeholder="Insira o novo nome de utilizador..." 
                placeholderTextColor="#21305A"
                type="text"
                value={newUserName}
                onChangeText={(text)=>setNewUserName(text)}
                ></TextInput>
            </InputWrapper>
            <InputWrapper>
                <TextInput 
                placeholder="Insira a nova password...(Opcional)" 
                placeholderTextColor="#21305A"
                secureTextEntry={true}
                type="password"
                value={newPassword}
                onChangeText={(text)=>setNewPassword(text)}
                onSubmitEditing={()=>handleInfoUpdate(newUserName,newPassword,navigation,setError)}
                ></TextInput>
            </InputWrapper>
            {error ?      
            <ErrorWrapper>
                <Feather  name={'alert-circle'} color={"#fff"} size={DIMENS_UI_ICONS_MEDIUM}></Feather>
                <ErrorLabel>{error}</ErrorLabel>
            </ErrorWrapper>
            :null}
            
            
            <LoginButton onPress={()=>handleInfoUpdate(newUserName,newPassword,navigation,setError)}>
                <ButtonWrapper>
                    <ButtonLabel>Atualizar</ButtonLabel>
                </ButtonWrapper>         
            </LoginButton>
            </>
            

     
    )
}