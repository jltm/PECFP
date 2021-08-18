import React,{useState,useEffect} from 'react'
import {Text,Button,TouchableOpacity,View,Animated} from 'react-native'
import {checkSubscription, createSubscriptionAlert, getRoutingInfo, getSingleStationData, getSubscriptionStatus, toHHMMSS, toKm} from '../../utils/functions'
import * as Location from 'expo-location'
import {updateLocation} from '../../utils/functions';
import {getAdressFromCoordinates} from '../../utils/functions'
import {getArrivals, getDepartures} from '../../utils/functions'
import { Image } from 'react-native';
import { StyledView,ImageLayer,Container,Container2,Container3,Container4,Container5,Body, TopHalf, BottomHalf, TopLayer,ImageContainer,Label,Dropdown } from './styles'
import Header from '../../components/Details'
import ChatScreen from '../../components/Details/ChatScreen';
import MyTabs from '../../components/Details/SchedulesTab';
import { useFocusEffect } from '@react-navigation/core';
import { DIMENS_H3, DIMENS_LABELS, HEIGHT,DIMENS_UI_ICONS_SMALL, DIMENS_REGULAR, DIMENS_UI_ICONS_MEDIUM } from '../../dimensions';
import {Feather,MaterialCommunityIcons,Ionicons} from '@expo/vector-icons'


export default function Details({route}){

    const optionsData=[
        {
            id:"1",
            mode:"walk",
            name:"walk"
        },
        {
            id:"2",
            mode:"bicycle",
            name:"bike"
        },
        {
            id:"3",
            mode:"drive",
            name:"car"
        }
    ]

    const value=useState(new Animated.Value(HEIGHT))[0]

    const moveChat=()=>{
        Animated.timing(value,{
            toValue:0,
            duration:400,
            useNativeDriver:true
        }).start()
    }
      
    const [startTime,setStartTime]=useState()
    const [endTime,setEndTime]=useState()

    const id = route.params.id
    const [initial,setInitial]=useState(true)
    const [selectedId,setSelectedId]=useState("3")
    const [mode,setMode]=useState("drive")
    const [distance,setDistance]= useState()
    const [time,setTime]= useState()
    const [adress, setAdress] = useState([]);
    const[departures,setDepartures]=useState([])
    const[arrivals,setArrivals]=useState([])
    const [subscriptionState,setSubscriptionState]=useState()
    const [show,setShow]=useState(true)
    const [data,setData]=useState([])
    const [currentLocation,setCurrentLocation] = useState(
        { latitude:null, 
          longitude:null}
          )
    useEffect(()=>{
        
        if(route.params.chat){
            moveChat()
        }
        if(route.params.location){
            setCurrentLocation(route.params.location)    
       
        }else{    
            updateLocation(Location,setCurrentLocation);            
        }

        if(route.params.data){
            setData(route.params.data)
            console.log("Dados locais")
        }else{
            if(initial==true){
            getSingleStationData(id,setData)
            setInitial(false)
            }
        }
    },[])


    useEffect(()=>{
  
        if(departures.length==0 && arrivals.length==0){
        setStartTime(new Date()*1)
        getDepartures(setDepartures,id)
        getArrivals(setArrivals,id)
        }

    
    },[])

    useEffect(()=>{
  
        if(departures.length!==0){
        setEndTime(new Date()*1)
        setTimeout(()=>{
            console.log((endTime-startTime))
        },1500)
        }

    
    },[departures,arrivals])

    useFocusEffect(   
        React.useCallback(() => {
            getSubscriptionStatus(id,setSubscriptionState)            
          }, [])
        
    );

    useFocusEffect(   
        React.useCallback(() => {
     
            if(data.length!==0){
                getAdressFromCoordinates(data.lat,data.long).then(adress=>{
                    setAdress(adress)
                    
                })    
            }     
          }, [data])
        
    );

    useEffect(() => {
  
                if(currentLocation.latitude!==null && data.length!==0){
                getRoutingInfo(currentLocation,data.lat,data.long,mode).then(data =>{ 
                    setDistance(data.distance)
                    setTime(data.time)
                })
            }

    }, [mode,currentLocation,data]);
    

    return (
        <>
         <Body>
            <Container>
            <TopHalf>
            <ImageLayer>
          
                <Image source={{uri:data.imgSrc}} style={{width:400,height:270,borderBottomLeftRadius:60}}></Image>
          
          </ImageLayer>
          <Header></Header>
                
                
                 </TopHalf>
                 <BottomHalf>
    
               <Container2>
                    <Container3>
                  
                            <Text numberOfLines={2} style={{marginTop:20,marginLeft:15,fontWeight: 'bold',fontSize: DIMENS_LABELS,width:220}}> Estação {data.title}</Text>
                            <Text numberOfLines={2} style={{marginLeft:20,width:200,fontSize:DIMENS_H3,marginTop:10}}>{adress}</Text>
                        
                            <Container4 style={{marginTop:20,marginLeft:15,marginTop:10,marginBottom:10}}>
                                    <Feather name={"map-pin"} size={DIMENS_UI_ICONS_SMALL} color={'#679CFF'} style={{marginRight:10}}></Feather>
                                    <Text style={{marginLeft:0,fontWeight: 'bold',fontSize: DIMENS_H3}}>{data.city}</Text>
                            </Container4>

                            <Container4 style={{marginLeft:5,marginBottom:20}}>
                                {subscriptionState ?
                                <TouchableOpacity onPress={() =>createSubscriptionAlert(id,setSubscriptionState)} style={{marginLeft:10,height: HEIGHT*0.03, width:100,backgroundColor: '#679CFF',color:"white",borderRadius:5,justifyContent:'center'}}>
                                    <View style={{flexDirection:'row',flex:1,alignSelf:'center'}}>
                                    <Feather name={"check"} size={DIMENS_UI_ICONS_SMALL} color={'#FFF'} style={{marginRight:5,alignSelf:'center'}}></Feather>
                                    <Text style={{fontWeight: 'bold',textAlign: 'center',color:'#fff',alignSelf:'center',fontSize:DIMENS_REGULAR}}>{'Subscrito'}</Text>
                                    </View>
                            
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={()=>checkSubscription(id,setSubscriptionState)} style={{marginLeft:10,height: HEIGHT*0.03, width:100,backgroundColor:'rgba(103, 156, 255,0.2)',color:"white",borderRadius:5,justifyContent:'center'}}>
                                    <Text style={{fontWeight: 'bold',textAlign: 'center',color:'#21305A',alignSelf:'center',fontSize:DIMENS_REGULAR}}>{'Subscrever'}</Text>
                                </TouchableOpacity>
                                }
                                
                                <TouchableOpacity onPress={()=>{moveChat()}} style={{marginLeft:10,height: HEIGHT*0.03, width:100,backgroundColor: '#679CFF',color:"white",borderRadius:5,justifyContent:'center'}}>
                                <Text style={{fontWeight: 'bold',textAlign: 'center',color:"#fff",fontSize:DIMENS_REGULAR}}>Eventos</Text>
                                </TouchableOpacity>
                            </Container4>
                
                    </Container3>
                    <Container5>
                                <Container3>
                                        <Container4>
                                        {optionsData.map((item)=>(
                                            selectedId==item.id ?
                                            <TouchableOpacity onPress={() => {setMode(item.mode),setSelectedId(item.id)} } style={{backgroundColor:'#fff',borderRadius:8}}>
                                                <MaterialCommunityIcons name={item.name} size={DIMENS_UI_ICONS_MEDIUM} color={'#679CFF'} style={{margin:5}}></MaterialCommunityIcons>
                                            </TouchableOpacity>
                                            
                                            :
                                            <TouchableOpacity onPress={() => {setMode(item.mode),setSelectedId(item.id)}  }>
                                                <MaterialCommunityIcons name={item.name} size={DIMENS_UI_ICONS_MEDIUM} color={'#FFF'} style={{margin:5}}></MaterialCommunityIcons>
                                            </TouchableOpacity>
                                        ))}
                                    
                                                   
                                        </Container4>
                                    </Container3>
                                    <Text numberOfLines={1} style={{fontWeight: 'bold',color:"white",marginTop:10,marginLeft:0,fontSize:DIMENS_H3,textAlign:'center'}}>{toKm(distance)} km({toHHMMSS(time)})</Text>
                            </Container5>
               </Container2>
            
    
            </BottomHalf>
            <MyTabs
                departures={departures}
                arrivals={arrivals}>
                    
                </MyTabs>
            </Container>
        </Body>

        
            {show ?
                <ChatScreen
                stationId={id}
                stationName={data.title}
                setShow={setShow}
                value={value}>

                </ChatScreen>
            :null

            }

    </>

        
    );
;}