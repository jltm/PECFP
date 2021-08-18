import React,{useEffect, useRef,useState} from 'react'
import {Text,View} from 'react-native'
import {ScrollView,Card,CardHeader,HeaderWrapper,CardLocation,CardBody,CardImg,CardLabel,CloseButton,CloseButtonLabel,InfoWrapper,InfoLabel,InfoDiv,OptionsWrapper,InnerWrapper,OptionsButton} from './styles'
import {Feather,Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import {updateCarouselToRegion, updateRegionToScrollView} from './functions'
import { toHHMMSS, toKm } from '../../../utils/functions';
import {Linking} from 'react-native'
import { DIMENS_UI_ICONS_MEDIUM, DIMENS_UI_ICONS_SMALL} from '../../../dimensions';
import { Dimensions } from 'react-native';


export default function StationsCarousel({placeId,setPlaceId,show,setShow,data,location,setState,setLocked}){

    const scrollview = useRef()
    const [hidden, setHidden] = useState({});
    const navigation=useNavigation();

    const handleScroll=(e)=>{
        setLocked(false)
        let index=Math.round(parseFloat(((e.nativeEvent.contentOffset.x))/Dimensions.get('window').width))
        console.log(index)
        let coef=index*0.1
        updateRegionToScrollView(Math.round(index+coef),data,setState,setPlaceId)
    }
    
    useEffect(()=>{
        if(data){
        updateCarouselToRegion(placeId,data,scrollview)
        }
    },[placeId])
    useEffect(()=>{
        if(data){
        updateCarouselToRegion(placeId,data,scrollview)
        }
    },[data])

    return(
      
        <ScrollView
          ref={scrollview}
          onMomentumScrollEnd={(e)=>handleScroll(e)}
          >
          {show ? ((
          data.map(({data,id,time,distance})=>(
              <Card key={id}>
                  <CardHeader>
                      <CardImg source={{uri:data.imgSrc}}></CardImg>
                      <HeaderWrapper>
                          <CardLabel numberOfLines={3}>{data.title}</CardLabel>
                          <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                              <Feather name={"map-pin"} size={DIMENS_UI_ICONS_SMALL} color={'#679CFF'}></Feather>
                              <CardLocation>{data.city}</CardLocation>
                          </View>
                          
                      </HeaderWrapper>
                  </CardHeader>
                  <CardBody>
                      
                      <InfoWrapper>
                        <InfoDiv>
                            <Ionicons name={"ios-car-outline"} size={DIMENS_UI_ICONS_MEDIUM} color={'#21305A'} style={{alignSelf:'center',marginLeft:10}}></Ionicons>
                            <InfoLabel>{toHHMMSS(time)}({toKm(distance)}) km</InfoLabel>
                        </InfoDiv>
                     </InfoWrapper>

                       <OptionsWrapper>
                          <InnerWrapper>

                              <OptionsButton onPress={()=>{Linking.openURL('tel:707210220')}}>
                                  <Feather name={"phone"} color={"#21305A"} size={DIMENS_UI_ICONS_MEDIUM}></Feather>
                              </OptionsButton>
                           
                              <OptionsButton onPress={()=>navigation.navigate('Details',{location:location,data:data,id:id})}>
                                  <Feather name={"info"} color={"#21305A"} size={DIMENS_UI_ICONS_MEDIUM}></Feather>
                              </OptionsButton>
                          </InnerWrapper>


                      </OptionsWrapper>
                  </CardBody>
                  </Card>
          ))
          )):null}
          </ScrollView>
    
    )
}