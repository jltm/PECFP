import React, { useEffect, useState } from 'react';
import { ScrollView,Card,Image,CardFooter,CardLabel,CardLocation,InnerWrapper,LocationWrapper,TimeWrapper,TimeInnerWrapper,TimeLabel} from './styles';
import {Feather,Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import {toHHMMSS} from '../../../utils/functions'
import { DIMENS_UI_ICONS_MEDIUM, DIMENS_UI_ICONS_SMALL, WIDTH } from '../../../dimensions';


export default function NearestCarousel({data,location}){
const navigation=useNavigation();
return(
    <ScrollView>
        {data.map(({data,id,time})=>(
            <Card key={id} onPress={()=>navigation.navigate('Details',{location:location,data:data,id:id})}>
                <Image source={{uri: data.imgSrc}}>
                </Image>
                <CardFooter>
                    <CardLabel>{data.title}</CardLabel>
                    <InnerWrapper>
                        <LocationWrapper>
                            <Feather name={"map-pin"} size={DIMENS_UI_ICONS_SMALL} color={'#679CFF'} style={{alignSelf:'center'}}></Feather>
                            <CardLocation>{data.city}</CardLocation>
                        </LocationWrapper>
                        <TimeWrapper>
                            <TimeInnerWrapper>
                                <Ionicons name={"ios-car-outline"} size={DIMENS_UI_ICONS_MEDIUM} color={'#21305A'} style={{alignSelf:'center'}}></Ionicons>
                                <TimeLabel>{toHHMMSS(time)}</TimeLabel>
                            </TimeInnerWrapper>
                        </TimeWrapper>
                        
                        
                    </InnerWrapper>
                </CardFooter>
            </Card>
        ))}
 </ScrollView>

)
}