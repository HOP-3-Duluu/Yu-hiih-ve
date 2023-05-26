import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  View,
  Text,
  FlatList,
} from 'react-native';
import {LeftArrow} from '../assets/icon';
import {SmallCategory} from '../components/common/small_category';

export const CategoriesPage = ({navigation}: any) => {
  const types = [
    {name: 'Internet Cafe', url: require('../assets/image/computer.png'), type: "pc"},
    {name: 'Restaurant', url: require('../assets/image/ramenNoodles.png'), type: "resturaunt"},
    {name: 'Movie Theater', url: require('../assets/image/cinema.png'), type: "movie"},
    {name: 'Pub', url: require('../assets/image/pub.png'), type: "pub"},
    {name: 'National Park', url: require('../assets/image/forest.png'), type: "nationalPark"},
    {name: 'Game Center', url: require('../assets/image/game.png'), type: "kids"},
    {name: 'Gallery', url: require('../assets/image/gallery.png'), type: "gallery"},
    {name: 'Lounge', url: require('../assets/image/lounge.png'), type: "lounge"},
    {name: 'Club', url: require('../assets/image/club.png'), type: "club"},
    {name: 'Play Station', url: require('../assets/image/play_station.png'), type: "playStation"},
    {name: 'Karaoke', url: require('../assets/image/karaoke.png'), type: "karoake"},
    {name: 'Billiard', url: require('../assets/image/billiard-ball.png'), type: "billiard"},
    {name: 'Bowling', url: require('../assets/image/bowling.png'), type: "bowling"},
    {name: 'Cafe', url: require('../assets/image/cafe.png'), type: "cafe"},
    {name: 'Arcade Game', url: require('../assets/image/arcade-machine.png'), type: "arcadeGame"},
    {name: 'Сafeteria', url: require('../assets/image/soup.png'), type: "cafeteria"},
    {name: 'Bubble Tea', url: require('../assets/image/bubble-tea.png'), type: "bubbleTea"},
    {name: 'Zoo Park', url: require('../assets/image/elephant.png'), type: "zooPark"},
  ];
 

  return (
    <SafeAreaView style={styled.flat}>
      <View style={styled.header}>
        <Pressable
          style={styled.backButton}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <LeftArrow />
        </Pressable>
        <Text style={styled.headerText}>Categories</Text>
      </View>
      
      <FlatList
        data={types}
        renderItem={({item}) => <SmallCategory category_type={item} navigation={navigation}/>}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const styled = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 12,
    borderColor: 'rgba(0, 0, 0, 0.04)',
    marginLeft: 10,
  },
  headerText: {
    color: '#242424',
    fontWeight: '500',
    letterSpacing: 0.02,
    fontSize: 26,
    marginLeft: 20,
  },
  flat: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
