import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Text,
} from 'react-native';
import {Image} from 'react-native';
import {LeftArrow, RedHeart_icon} from '../../assets/icon';
import ImageView from 'react-native-image-viewing';

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
    seeMore: {
      width: windowWidth - 80,
      marginTop: 320,
      color: 'white',
      fontSize: 14.5,
      fontWeight: '500',
      display: 'flex',
      textAlign: 'right',
    },
  });

  const [favourite, setFavourite] = useState(false);
  const Favourite = () => {
    setFavourite(!favourite);
    // MAKE LATER WHEN BACKEND IS FINISHED !!!!!!!!!
  };

  const [visible, setIsVisible] = useState(false);
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styled.image_dark}
        activeOpacity={0.9}
        onPress={() => {
          setIsVisible(true);
        }}>
        <Text style={styled.seeMore}>See more photos.</Text>
      </TouchableOpacity>
      <Pressable
        onPress={() => {
          props.navigation.goBack();
        }}
        style={styled.backButton}>
        <LeftArrow />
      </Pressable>
      <Image source={props?.images[0]} style={styled.image} />
      <ImageView
        images={props?.images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
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
