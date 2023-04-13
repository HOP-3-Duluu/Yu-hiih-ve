import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { Categories } from '../components/common/categories_section';

const App = () => { 
  return (
    <SafeAreaView>
      <Text>Hello, Yu hiimeer baina?</Text>
      <Categories/>
    </SafeAreaView>
  );
}

export default App;
