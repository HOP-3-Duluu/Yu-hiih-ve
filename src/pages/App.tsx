import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { Categories } from '../components/common/categories_section';
import { Header } from '../components/common/header';

const App = () => { 
  return (
    <SafeAreaView>
      <Text>Hello, Yu hiimeer baina?</Text>
      <Header/>
      <Categories/>
    </SafeAreaView>
  );
}

export default App;
