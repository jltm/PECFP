import {useEffect} from 'react'
import { WIDTH } from '../../../dimensions'
import {getDistancefromUser} from '../../../utils/functions'

export function updateCarouselToRegion(placeId,data,scrollview){


        if(placeId && scrollview){
            const index = data.findIndex(item => item.id == placeId)
            scrollview.current.scrollTo({x:index*(WIDTH*0.8+40)})
        }
}

export function updateRegionToScrollView(index,data,setState,setPlaceId){
    var ids=[]
    var coordinates=[]
    data.map(({data,id})=>(
        coordinates.push(data),
        ids.push(id)
      ))

            setState({latitude:parseFloat(coordinates[index].lat),longitude:parseFloat(coordinates[index].long)})
            setPlaceId(ids[index])

}

    
export function handlePinEvent(index,location,mode,lat,long,setDistance,hidden,setHidden){

        console.log('pinevent->'+lat+long)
        Object.keys(hidden).map((item)=>(
            setHidden({...hidden, [item]: false})
        ))
        setHidden({ ...hidden, [index]: !hidden[index] });
        getDistancefromUser(location,mode,lat,long,setDistance)
    
}