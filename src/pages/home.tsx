import React, { useState } from 'react';
import { SafeAreaView, Text, Dimensions, ScrollView, View } from 'react-native';
import { Categories } from '../components/common/categories_section';
import { Header } from '../components/common/header';
import { Popular_section } from '../components/common/popular_section';
import { SearchInput } from '../components/core/searchInput';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const HomePage = ({ navigation }: any) => {
  const [focus, setfocus] = useState(false)
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss} accessible={true}>
      <SafeAreaView style={{ alignItems: 'flex-end', width: windowWidth }}>
        <ScrollView style={{ height: windowHeight + 3890, width: "94%" }}>
          <Header navigation={navigation} />
          <SearchInput navigation={navigation} focus={focus} setfocus={setfocus} />
          <SafeAreaView style={focus ? { display: 'none', height: "0%" } : { display: 'flex' }}>
            <Categories navigation={navigation} />
            <Popular_section navigation={navigation} />
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
