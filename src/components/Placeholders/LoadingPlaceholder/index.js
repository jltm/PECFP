import React from 'react'
import {ScrollView,Card} from './styles'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { View } from 'react-native';
import { WIDTH,HEIGHT } from '../../../dimensions'

export function LoadingPlaceholder(){

    return(
            <ScrollView>
            <SkeletonPlaceholder>
                
                <View style={{width:WIDTH*0.8,height:HEIGHT*0.18,borderRadius:8,marginLeft:20,marginRight:20}}></View>
                <View style={{width:WIDTH*0.3,height:HEIGHT*0.02,borderRadius:8,marginTop:10,marginLeft:20,marginRight:20}}></View>
                <View style={{width:WIDTH*0.2,height:HEIGHT*0.02,borderRadius:8,marginTop:10,marginLeft:20,marginRight:20}}></View>

            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                
                <View style={{width:WIDTH*0.8,height:HEIGHT*0.18,borderRadius:8,marginLeft:20,marginRight:20}}></View>
                <View style={{width:WIDTH*0.3,height:HEIGHT*0.02,borderRadius:8,marginTop:10,marginLeft:20,marginRight:20}}></View>
                <View style={{width:WIDTH*0.2,height:HEIGHT*0.02,borderRadius:8,marginTop:10,marginLeft:20,marginRight:20}}></View>


            </SkeletonPlaceholder>
            </ScrollView>
    )

}

export function LoadingSchedules(){

    let loop=[]
    for (let i = 0; i < 10; i++) {
        loop.push(
            <View style={{width:WIDTH*0.9,height:50,borderRadius:8,marginTop:20,alignSelf:'center'}}></View>
        )
    }

    return(
    
            <SkeletonPlaceholder>    
               {loop}
            </SkeletonPlaceholder>
     

    )
}