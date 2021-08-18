import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text } from 'react-native';
import {ImageContainer,Label,Wrapper } from './styles';
import { Feather} from '@expo/vector-icons';


export default function Header(){
    const navigation=useNavigation();
    return(
        <Wrapper>
            <Label>
                <Text>Eventos</Text>
            </Label>
        </Wrapper>
    )
}