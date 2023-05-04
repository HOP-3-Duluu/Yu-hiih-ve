import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Image} from 'react-native';
import {LeftArrow} from '../../assets/icon/left_arrow';
import RedHeart_icon from '../../assets/icon/red_heart';

const windowWidth = Dimensions.get('window').width;
export const LocationImage = ({props}: any) => {
  const styled = StyleSheet.create({
    image: {
      width: windowWidth - 60,
      height: windowWidth - 20,
      borderRadius: 20,
    },
    image_dark: {
      width: windowWidth - 60,
      height: windowWidth - 20,
      borderRadius: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.40)',
      position: 'absolute',
      zIndex: 1,
    },
    like: {
      width: 30,
      height: 30,
      backgroundColor: 'rgb(222, 222, 222)',
      borderRadius: 10000000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 2,
      position: 'absolute',
      zIndex: 1,
      right: 20,
      bottom: -15,
    },
    backButton: {
      position: 'absolute',
      width: 60,
      height: 60,
      backgroundColor: 'white',
      marginTop: 10,
      marginLeft: 10,
      zIndex: 10,
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{scale: 0.5}],
    },
  });

  const [favourite, setFavourite] = useState(false);
  const Favourite = () => {
    console.log('Favourited!');
    setFavourite(!favourite);
    // MAKE LATER WHEN BACKEND IS FINISHED !!!!!!!!!
  };

  return (
    <SafeAreaView>
      <View style={styled.image_dark} />
      <Pressable
        onPress={() => {
          props.navigation.goBack();
        }}
        style={styled.backButton}>
        <LeftArrow />
      </Pressable>
      <Image
        source={{
          uri: `${props.image_url}`,
        }}
        style={styled.image}
      />
      <TouchableOpacity
        style={styled.like}
        activeOpacity={0.5}
        onPress={Favourite}>
        <RedHeart_icon favourite={favourite} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
