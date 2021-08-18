import React,{useEffect,useState} from 'react';
import { FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {searchFilterFunction} from './functions'
import { useNavigation } from '@react-navigation/native';
import { Card,CardTitle,CardImg, CardLocation,Wrapper,OptionIcon, OptionWrapper } from './styles';
import {getData} from '../../../utils/functions'
import { View } from 'react-native';
import { DIMENS_UI_ICONS_MEDIUM, DIMENS_UI_ICONS_SMALL, HEIGHT } from '../../../dimensions';
import {Feather} from '@expo/vector-icons'
import { Row } from 'native-base';

export default function SearchView({location}){

const navigation=useNavigation();
const [search, setSearch] = useState('');
const [filteredDataSource, setFilteredDataSource] = useState([]);
const [masterDataSource, setMasterDataSource] = useState([]);


useEffect(() => {
    getData(setMasterDataSource);
}, []);

const handleData = (text,masterDataSource) => { 
if (text) {  

  setFilteredDataSource(searchFilterFunction(text,masterDataSource))
  setSearch(text)
  console.log(filteredDataSource)
  
  }else {
  setFilteredDataSource('');
  setSearch(text);
}
};
const Item = ({ item}) => (  //TODO destruturar data,id
<Card onPress={()=>navigation.navigate('Details',{data:item.data,id:item.id,location:location})}>
  <CardImg source={{uri:item.data.imgSrc}}></CardImg>
  <Wrapper>
    <CardTitle numberOfLines={2}>{item.data.title}</CardTitle>
    <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
      <Feather name={'map-pin'} color={'#679CFF'} size={DIMENS_UI_ICONS_SMALL}></Feather>
      <CardLocation>{item.data.city}</CardLocation>
    </View>
  </Wrapper>
  <OptionWrapper>
  <OptionIcon>
    <Feather name={'arrow-right'} color={'#21305A'} size={DIMENS_UI_ICONS_MEDIUM}></Feather>
    </OptionIcon>
    </OptionWrapper>
</Card>
);

const renderItem = ({ item }) => (

  <Item item={item}/>
);

return (
      <View style={{backgroundColor:'#F2F5FE',height:HEIGHT}}>
      <SearchBar 
      autoFocus
      containerStyle={{backgroundColor:'rgba(0,0,0,0)',borderBottomColor:'rgba(0,0,0,0)',borderTopColor:'rgba(0,0,0,0)',marginLeft:10,marginRight:10,marginTop:20}}
      inputContainerStyle={{backgroundColor:'#fff'}}
      round={true}
      searchIcon={{ size: 24 }}
      onChangeText={(text) => handleData(text,masterDataSource)}
      onClear={(text) => handleData('')}
      placeholder="Pesquise estações"
      lightTheme={true}
      value={search}>

      </SearchBar>
    <FlatList
        data={filteredDataSource}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />
    </View>
   
);
}