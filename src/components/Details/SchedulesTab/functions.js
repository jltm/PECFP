import {Share} from 'react-native'

export const onShare = async (data,type) => {
    console.log(data)
    let message=``

    if(type==0){
        message=`PECFP Horário: Estação :${data.arrivalStationName} Partida:${formatSchedule(data.departTime)} Chegada:${formatSchedule(data.arrivalTime)}`
    }else{
        message=`PECFP Horário: Estação :${data.departureStationName} Chegada:${formatSchedule(data.arrivalTime)} Partida:${formatSchedule(data.departTime)}`
    }

    try {
      const result = await Share.share({
        message:message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  export const formatSchedule = (value) =>{
    let j = value;
    let x = j.toString()
    if(x.length==4 ){
        x = x.substring(0, 2) + ":" + x.substring(2, x.length)
    }else if(x.length==3){
        x = x.substring(0, 1) + ":" + x.substring(1, x.length);
    }else if(x.length==1){
        x = x.substring(0, 0) + "0:0" + x.substring(0, x.length);
    }else{
        x = x.substring(0, 0) + "0:" + x.substring(0, x.length);
    }

    return x
}