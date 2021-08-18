import React from 'react';
import { SafeAreaView} from 'react-native';
import SearchView from '../../components/Search/SearchView'
import { Container } from './styles';

export default function Search({route}) {

    return (
        <SafeAreaView style={Container}>
          <SearchView
          location={route.params.location}></SearchView>
        </SafeAreaView>
    );
    }