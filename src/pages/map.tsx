import React, {useState} from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {MapTargetIcon} from '../assets/icon/maptarget';
import {Home_icon} from '../assets';
import {HouseIcon} from '../assets/icon/house';

export const MapPage = ({navigation}: any) => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const [location, setLocation] = useState({
    latitude: 47.92119610117282,
    longitude: 106.91841835791561,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const GoTo = () => {
    setLocation({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }),
      Geolocation.getCurrentPosition(info =>
          setLocation({
            latitude: 47.92119610117282,
            longitude: 106.91841835791561,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }),

        // --------------------   This code doesn't work on computers, only on phones.
        // --------------------   So We'll use a preset location at the demoday place for now
        // setLocation({
        //   latitude: info.coords.latitude,
        //   longitude: info.coords.longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }),
      );
  };

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.92119610117282,
          longitude: 106.91841835791561,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={location}
      />
      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.home}>
        <HouseIcon />
      </Pressable>
      <Pressable
        onPress={() => {
          GoTo();
        }}
        style={styles.target}>
        <MapTargetIcon />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  target: {
    position: 'absolute',
    bottom: 30,
    padding: 15,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 999999,
    zIndex: 1000,
  },
  home: {
    position: 'absolute',
    bottom: 30,
    padding: 15,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 999999,
    zIndex: 1000,
  },
});
