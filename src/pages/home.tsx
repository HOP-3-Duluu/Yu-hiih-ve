import React from 'react';
import { SafeAreaView, Text, Dimensions, ScrollView, View } from 'react-native';
import { Categories } from '../components/common/categories_section';
import { Header } from '../components/common/header';
import { Popular_section } from '../components/common/popular_section';
import { SearchInput } from '../components/core/searchInput';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const HomePage = ({ navigation }: any) => {

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ alignItems: 'flex-end', width: windowWidth }}>
        <ScrollView style={{ height: windowHeight - 140, width: "94%" }}>
          <Header navigation={navigation} />
          <SearchInput navigation={navigation}/>
          <Categories navigation={navigation} />
          <Popular_section navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
