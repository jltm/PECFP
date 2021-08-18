import React,{useEffect, useState} from 'react';
import {InnerView} from './styles'
import {View,Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export default function CustomMarker({currentId,id}){
 
    return (
            <>
                { currentId==id ?
                 <InnerView style={{width:50,height:50,borderRadius:25}}>
                    <Ionicons name={'train-outline'} color={'#FFF'} size={25}></Ionicons>
                </InnerView>
                :
                <InnerView style={{ backgroundColor:'rgba(103, 156, 255,0.4)'}}>
                    <Ionicons name={'train-outline'} color={'#21305A'} size={20}></Ionicons>
                </InnerView>
                }
            </>
    );
}