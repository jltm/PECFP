import {useEffect} from 'react'
import { getDistancefromUser, getTripTime } from "../../../utils/functions"

export function updateRegiontoSelected(data,placeId,setState){
    var ids=[]
    var coordinates=[]
    data.map(({data,id})=>(
        coordinates.push(data),
        ids.push(id)
      ))
        if(!placeId){
            console.warn("scroll to"+placeId)
        }else{
            const index = ids.findIndex(item => item == placeId)
            setState({latitude:parseFloat(coordinates[index].lat),longitude:parseFloat(coordinates[index].long)})
        }

}