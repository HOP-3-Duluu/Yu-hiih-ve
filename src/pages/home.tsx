import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { Categories } from '../components/common/categories_section';
import { Header } from '../components/common/header';
import { Popular_section } from '../components/common/popular_section';

export const HomePage = () => { 
  return (
    <SafeAreaView>
      <Header/>
      <Categories/>
      <Popular_section/>
    </SafeAreaView>
  );
}
