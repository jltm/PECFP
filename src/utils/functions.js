import {db} from '../config/firebase'
import {auth,firebase} from '../config/firebase'
import {Alert,Share} from 'react-native'


export const toHHMMSS = (seconds) => {
  seconds = Number(seconds);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor(seconds % 3600 / 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";
  return hDisplay + mDisplay; 
}

export const toKm=(meters)=>{

  result=(meters/1000).toFixed(2);
  return result;

}




export const getData= async (setStationsInfo) =>{
   
    const data = await db.collection("stations").get()
    setStationsInfo(data.docs.map(doc=>({data:doc.data(),id:doc.id})))
  }

  export const getSingleStationData= async (stationId,setData) =>{
   
    const data = await db.collection("stations").doc(stationId).get()
    setData(data.data())
    //console.log(data.data())
  }

  export const getFilters= async (setFilters) =>{
   
    const data = await db.collection("filters").get()
    setFilters(data.docs.map(doc=>({data:doc.data(),id:doc.id})))
  }

  export const getHistoricInfo= async (setHistoricInfo) =>{
   
    const data = await db.collection("historicInfo").orderBy("year","desc").get()
    setHistoricInfo(data.docs.map(doc=>({data:doc.data(),id:doc.id})))
  }

export const getMapDatabyCity= async (setStationsInfo,city,currentLocation,mode)=>{
  console.log('getMapData')

    let array=[]
    let data;
    
    if(currentLocation){
      if(city=="Todas"){
        data = await db.collection("stations").get()
      }else{
        data = await db.collection("stations").where("city","==",city).get()
      }
      await Promise.all( data.docs.map(async doc=>{
          const info={}
          info.data=doc.data()
          info.id=doc.id
          await getRoutingInfo(currentLocation,doc.data().lat,doc.data().long,mode).then(data =>{ 
            info.time=data.time
            info.distance=parseInt(data.distance)
          })  
          
          array.push(info)
      
      }))
      setStationsInfo(orderByAsc(array,"distance"))
    }
  }

  const orderByAsc=(array,parameter)=>{
    array.sort((a, b) => {
      return a[parameter] - b[parameter];
    });
    return array
  }
  export const getNearby= async (currentLocation,currentCity,mode,setStationsNearby) =>{

   
   
      let array=[]
      const data = await db.collection("stations").where("city","==",currentCity).get()
      await Promise.all( data.docs.map(async doc=>{
          const info={}
          info.data=doc.data()
          info.id=doc.id
          await getRoutingInfo(currentLocation,doc.data().lat,doc.data().long,mode).then(data =>{ 
            info.time=parseInt(data.time)
          }
          )   
          array.push(info)
          array.sort((a, b) => {
            return a.time - b.time;
          });

      
      }))
      setStationsNearby(array)

  }

  export const getAdressFromCoordinates = (lat,long)=>{


     return fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&lang=pt&apiKey=c0944829dae542ceb2d017bc9cfb6f04`)
        .then((response) => response.json())
        .then((json) => {
          return json.features[0].properties.formatted
        });
        
    }

    export const getCityFromCoordinates = (location,setCurrentLocation)=>{

      return fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.latitude}&lon=${location.longitude}&lang=pt&apiKey=c0944829dae542ceb2d017bc9cfb6f04`)
        .then((response) => response.json())
        .then((json) => {
          return json.features[0].properties.state
        });
    }


    export const getRoutingInfo = (location,lat,long,mode)=>{
  
      return fetch(`https://api.geoapify.com/v1/routing?waypoints=${location.latitude},${location.longitude}|${lat},${long}&mode=${mode}&apiKey=c0944829dae542ceb2d017bc9cfb6f04`)
        .then((response) => response.json())
        .then((json) =>  {
          return json.features[0].properties
        });

    }
    
export const updateLocation =(Location,setLocation,setError) =>{
   
    (async () => {
      console.log("Location Triggered")
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setError('Permissão de Localização recusada');
        return;
      }

      let location = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        distanceInterval:50
      },
      newLocation=>{
        console.log("Location Updated")
        let coords= newLocation.coords
        setLocation({
          latitude:coords.latitude,
          longitude:coords.longitude
          })
      });
    })();
}

export const getDepartures = async (setDepartures,stationId)=>{

  let array=[]

  const data =await db.collection("trips").where("departureLoc","==",stationId).get()

  await Promise.all(data.docs.map(async doc=>{
 

        const tripData = doc.data();
        
        await db.collection("schedules").doc(tripData.schedules).get()
        .then((doc) => {

          tripData.departTime=doc.data().departTime
          tripData.arrivalTime=doc.data().arrivalTime
          

        });

        await db.collection("stations").doc(tripData.arrivalLoc).get()
        .then((doc) => {

          tripData.arrivalStationName=doc.data().title
          

        });
        array.push(tripData)
  
    }))
    setDepartures(orderByAsc(array,"departTime"))

    return data

}

export async function getArrivals(setArrivals,stationId){

  let array=[]

  const data =await db.collection("trips").where("arrivalLoc","==",stationId).get()

  await Promise.all(data.docs.map(async doc=>{
 

        const tripData = doc.data();
        
        await db.collection("schedules").doc(tripData.schedules).get()
        .then((doc) => {

          tripData.departTime=doc.data().departTime
          tripData.arrivalTime=doc.data().arrivalTime
          

        });

        await db.collection("stations").doc(tripData.departureLoc).get()
        .then((doc) => {

          tripData.departureStationName=doc.data().title
          

        });
        array.push(tripData)
  
    }))
    setArrivals(orderByAsc(array,"arrivalTime"))
  
    return data


}


export const checkSessionStatus=(navigation,setAuth)=>{

    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
         if(authUser){
             navigation.replace('MainStack')
         }else{
          setAuth(true)
         }
     })
     return unsubscribe
}

export const handleLoadingStatus=(array,setLoading)=>{
    if(array.length!==0){
      setLoading(false)
      }
}


export const insertEvent=(stationId,stationName,message)=>{
  const unsubscribe=db.collection("events").doc(stationId).collection("events").add({
    content: message,
    type:"aviso",
    stationId:stationName,
    userId:auth.currentUser.uid,
    userName:auth.currentUser.displayName,
    timeStamp:firebase.firestore.FieldValue.serverTimestamp()
  })

  return unsubscribe
}

export const deleteEvent=(eventId,stationId)=>{
  const unsubscribe=db.collection("events").doc(stationId).collection("events").doc(eventId).delete()

  return unsubscribe
}

export const insertSubscription=(stationId)=>{
  const unsubscribe=db.collection("subscriptions").doc(auth.currentUser.uid).collection("subscriptions").doc(stationId).set({
    stationId:stationId
  })

  return unsubscribe
}

export const deleteSubscription=(stationId)=>{
  const unsubscribe=db.collection("subscriptions").doc(auth.currentUser.uid).collection("subscriptions").doc(stationId).delete()

  return unsubscribe
}

export const getMessages=(stationId,setMessages)=>{
  const unsubscribe=db.collection("events").doc(stationId).collection("events").orderBy("timeStamp","asc").onSnapshot((snapshot)=>
    setMessages(snapshot.docs.map((doc)=>({
      id:doc.id,
      data:doc.data()
    }))
  ))
  return unsubscribe
}

export const getUserSubscriptionsInfo=async(setMessages,setStations)=>{

  let messages=[]
  let subscriptions=[]

  const data=await db.collection("subscriptions").doc(auth.currentUser.uid).collection("subscriptions").get()
  await Promise.all(data.docs.map(async doc=>{

    await db.collection("stations").doc(doc.data().stationId).get()
    .then((doc)=>{
      subscriptions.push({
        id:doc.id,
        data:doc.data().title
      })
    })
    
    await db.collection("events").doc(doc.data().stationId).collection("events").orderBy("timeStamp","desc").limit(2).get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        messages.push({
          id:doc.id,
          data:doc.data()
        })
      })
    }) 
}))
  messages.sort((a, b) => {
    return new Date(b.data.timeStamp.toDate()) - new Date(a.data.timeStamp.toDate());
  });

setStations(subscriptions)
setMessages(messages)

}

export const checkSubscription = (stationId,setSubscriptionState)=>{
  getSubscription(stationId).then(doc=>{
    if(doc.empty){
     insertSubscription(stationId)
     setSubscriptionState(true)
   }else{
     deleteSubscription(stationId)
     setSubscriptionState(false)
    }
  })
}

const getSubscription =async (stationId) =>{
  const unsubscribe=await db.collection("subscriptions").doc(auth.currentUser.uid).collection("subscriptions").where("stationId","==",stationId).limit(1).get() 
  return unsubscribe
}

export const getSubscriptionStatus=(stationId,setSubscriptionState)=>{
  getSubscription(stationId).then(doc=>{
    if(doc.empty){
      setSubscriptionState(false)
    }else{
      setSubscriptionState(true)
     }
  })
}

export const createDeleteAlert = (id,stationId) =>
    Alert.alert(
      "Apagar Evento",
      "Pretende apagar este evento?",
      [
        {
          text: "Voltar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Eliminar", onPress: () => deleteEvent(id,stationId) }
      ]
    );

    export const createSubscriptionAlert = (stationId,setSubscriptionState) =>
    Alert.alert(
      "Apagar Subscrição",
      "Pretende apagar esta subscrição?",
      [
        {
          text: "Voltar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Eliminar", onPress: () =>{
          checkSubscription(stationId,setSubscriptionState)
          
        }}
      ]
    );

    export const getStationInfofromSubscritpion=async (id)=>{
      const unsubscribe= await db.collection("stations").where("stationId","==",id).get("stationName")

      return unsubscribe
    }
