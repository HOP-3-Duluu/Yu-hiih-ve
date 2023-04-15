import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Categories} from '../components/common/categories_section';
import {Header} from '../components/common/header';
import {Information} from '../components/common/information_section';
import { SmallCategory } from '../components/common/small_category';

const App = () => {
  return (
    <SafeAreaView style={{gap: 20}}>
      <Header />
      <Categories />
      <Information/>
      <SmallCategory  props={{image_url: 'https://i.kym-cdn.com/entries/icons/original/000/028/315/cover.jpg', text: 'Work'}} />
    </SafeAreaView>
  );
};

export default App;
