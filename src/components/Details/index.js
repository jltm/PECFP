import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text } from 'react-native';
import {Label,Wrapper,ImageContainer } from './styles';
import { Feather} from '@expo/vector-icons';
import { View } from 'react-native';
import { HEIGHT } from '../../dimensions';


export default function Header(){

    const navigation=useNavigation();
    return(
        <Wrapper>
            <View style={{flexDirection:'row',alignItems:'center',marginBottom:HEIGHT*0.02}}>
                <ImageContainer onPress={()=>navigation.goBack()}>
                    <Feather name={"arrow-left"}  size={20} color={"#fff"}></Feather>
                </ImageContainer>
                <Label>
                    <Text>Detalhes</Text>
                </Label>
            </View>
        </Wrapper>
    )
}