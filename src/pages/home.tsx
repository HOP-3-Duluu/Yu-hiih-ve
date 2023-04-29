import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { Categories } from '../components/common/categories_section';
import { Header } from '../components/common/header';
import { SearchInput } from '../components/core/searchInput';

export const HomePage = () => { 
  return (
    <SafeAreaView>
      <Header/>
      <Categories/>
    </SafeAreaView>
  );
}
