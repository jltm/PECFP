import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text } from 'react-native';
import {ImageContainer,Label,Wrapper } from './styles';
import { Feather} from '@expo/vector-icons';

export default function Header({location}){
    const navigation=useNavigation();
    return(
        <Wrapper>
            <ImageContainer onPress={()=>navigation.navigate('Search',{location:location})}>
                <Feather name={"search"}  size={40} color={"#fff"}></Feather>
            </ImageContainer>
            <Label>
                <Text>Início</Text>
            </Label>
        </Wrapper>
    )
}
