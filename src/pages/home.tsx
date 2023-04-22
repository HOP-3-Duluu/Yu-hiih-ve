import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { Categories } from '../components/common/categories_section';
import { Header } from '../components/common/header';
import { Popular_section } from '../components/common/popular_section';
import { SearchInput } from '../components/core/searchInput';

export const HomePage = ({navigation}: any) => { 
  return (
    <SafeAreaView>
      <Header/>
      <SearchInput/>
      <Categories navigation={navigation}/>
      <Popular_section/>
    </SafeAreaView>
  );
}
