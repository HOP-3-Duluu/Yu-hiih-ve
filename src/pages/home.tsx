import React from 'react';
import { SafeAreaView, Text, Dimensions, ScrollView } from 'react-native';
import { Categories } from '../components/common/categories_section';
import { Header } from '../components/common/header';
import { Popular_section } from '../components/common/popular_section';
import { SearchInput } from '../components/core/searchInput';

export const HomePage = ({ navigation }: any) => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={{ alignItems: 'flex-end', width: windowWidth }}>
      <ScrollView style={{ height: windowHeight - 140, width: "94%" }}>
        <Header  navigation={navigation}/>
        <SearchInput />
        <Categories navigation={navigation} />
        <Popular_section />
      </ScrollView>
    </SafeAreaView>
  );
}
