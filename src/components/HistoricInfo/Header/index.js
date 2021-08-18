import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text } from 'react-native';
import {ImageContainer,Label,Wrapper } from './styles';


export default function Header(){

    return(
        <Wrapper>
            <Label>
                <Text>História</Text>
            </Label>
        </Wrapper>
    )
}