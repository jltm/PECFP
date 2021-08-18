import {Share} from 'react-native'

export const onMessageShare=async (data,stationName)=>{
    try {
        const result = await Share.share({
          message:
            `PECFP Evento na estação ${stationName}: ${data.userName} partilhou o evento: ${data.content}. Data:${new Date(data.timeStamp?.toDate()).toLocaleTimeString()} ${new Date(data.timeStamp?.toDate()).toLocaleDateString()}`,
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
}