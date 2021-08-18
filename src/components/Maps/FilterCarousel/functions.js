


export const updateRegionbyFilter=(data,setState,setPlaceId)=>{
  
    if(Object.keys(data).length!==0){
        let coordinates=[]
        let ids=[]
        data.map(({data,id})=>(
            ids.push(id),
            coordinates.push(data)

        ))
        setState({
            latitude:parseFloat(coordinates[0].lat), 
            longitude:parseFloat(coordinates[0].long)
        })
        setPlaceId(ids[0])
    }
}

export const filterSort=(filters,selectedFilter)=>{
    if(Object.keys(filters).length!==0){
        const index = filters.findIndex(({data,id}) => id == selectedFilter)
        filters.unshift(filters.splice(index, 1)[0]);
        }
}


export const greatherThan=(array,dummy,setDummy,limit,setData)=>{

    if(dummy==null){
        setDummy(array)
        let filteredArray = array.filter( x => 
            x.distance < limit
          );
        setData(filteredArray)
    }else{

    let filteredArray = dummy.filter( x => 
        x.distance < limit
      );
    setData(filteredArray)
    }
    


}