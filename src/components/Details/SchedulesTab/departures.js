import { Text } from 'native-base'
import {View} from 'react-native'
import React,{useEffect,useState} from 'react'
import { getDepartures, handleLoadingStatus } from '../../../utils/functions'
import {Container,TimeWrapper} from './styles'
import { DIMENS_H3, DIMENS_LABELS, DIMENS_REGULAR, DIMENS_UI_ICONS_SMALL } from '../../../dimensions'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { onShare,formatSchedule } from './functions'

function  Departures({departures}) {

    return (
            <View style={{backgroundColor:"#F2F5FE"}}>
               {departures ?
                departures.map((item=>(
                <TouchableOpacity style={{backgroundColor:"#F2F5FE",flexDirection:"row"}} key={item.id} onLongPress={()=>onShare(item,0)}>
                    <Container>
                    <View style={{backgroundColor:"#F2F5FE",marginLeft:10,borderRadius:8,padding:8,width:70,fontSize:DIMENS_REGULAR,alignSelf:'center'}}>
                    <Text style={{textAlign:'center',fontSize:DIMENS_REGULAR,color:'#21305A',fontWeight:'bold'}}>{item.trains}</Text>
                    </View>
            
                    <Text numberOfLines={1} style={{flex:1,fontWeight:"bold",color:'#21305A',marginLeft:10,fontSize:12,alignSelf:'center'}}>{item.arrivalStationName}</Text>

                    <TimeWrapper>
                    <Feather name={'clock'} color={'#21305A'} size={DIMENS_UI_ICONS_SMALL} style={{alignSelf:'center'}} style={{marginRight:5}}></Feather>
                        <Text style={{fontSize:DIMENS_REGULAR,color:'#21305A',fontWeight:'bold'}}>{`${formatSchedule(item.departTime)} - ${formatSchedule(item.arrivalTime)}`}</Text>
                    </TimeWrapper>
                    </Container>
                </TouchableOpacity>
                
                  
               )))
               
               :
               null}
               </View>
    )
}

export default Departures
