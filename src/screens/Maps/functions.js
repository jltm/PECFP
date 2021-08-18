import { getRoutingInfo} from "../../utils/functions"

export const updateLocalMapDta= async (data,currentLocation,mode,setState)=>{

  console.log('updateLocalMap')

  let referenceArray=[]
  let array=[]

  if(data){
  data.map(item=>{
    referenceArray.push(item.id) //array de referencia de ids para reordenar array depois das promises
  })

    await Promise.all( data.map(async item=>{
        const info={}
        info.data=item.data
        info.id=item.id
        await getRoutingInfo(currentLocation,item.data.lat,item.data.long,mode).then(data =>{ 
          info.time=data.time
          info.distance=parseInt(data.distance)
        })  

        array.push(info)
    
    }))
 
    array.sort((a, b) => {
        return referenceArray.indexOf(a.id) - referenceArray.indexOf(b.id);
      });
    setState(array)
  }

}