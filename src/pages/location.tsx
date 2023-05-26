import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import { Information } from '../components/common/information_section';
import { LocationImage } from '../components/common/location_image';
import ReadMore from '@fawazahmed/react-native-read-more';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const LocationPage = (props: any) => {
  const navigation = props.navigation;


  const images = [
    {
      uri: 'https://cdn.shopify.com/s/files/1/1917/6033/products/tabasco_1024x1024.jpg?v=1613071500',
    },
    {
      uri: 'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg',
    },
    {
      uri: 'https://www.chilipeppermadness.com/wp-content/uploads/2018/10/Jalapeno-Peppers1.jpg',
    },
    {
      uri: 'https://static.onecms.io/wp-content/uploads/sites/19/2018/02/13/tabasco-peppers-bottle-hero-2000.jpg',
    },
  ]

  const styled = StyleSheet.create({
    body: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '100%',
      gap: 5,
      paddingBottom: 10,
    },
    header: {
      width: windowWidth - 60,
      fontSize: 30,
      fontWeight: '500',
      marginTop: 15,
    },
    text: {
      color: 'rgba(0,0,0,0.7)',
      fontSize: windowHeight > 700 ? 15.5 : 13,
      fontWeight: '300',
      lineHeight: 15,
      width: "75%",
      marginLeft: "7%",
    },
    mapButton: {
      width: windowWidth - 50,
      backgroundColor: '#FF678B',
      height: 70,
      marginTop: 10,
      borderRadius: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
    },
  });
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <ScrollView>
        <View style={styled.body}>
          <LocationImage
            props={{
              images: images,
              navigation: navigation,
            }}
          />
          <Text style={styled.header}>{props?.route?.params?.name}</Text>
          <View style={{ width: '85%' }}>
            <ReadMore
              numberOfLines={2}
              seeLessStyle={{ color: 'red' }}
              seeMoreStyle={{ color: 'red' }}
              seeMoreText='Read more'
              seeLessText='Read less'
            >
              {props?.route?.params?.description}
            </ReadMore>
          </View>
          <Information props={[]} />
          <Pressable
            style={styled.mapButton}
            onPress={() => {
              navigation.navigate('map');
            }}>
            <Text style={{ fontWeight: '600', fontSize: 18, color: 'white' }}>
              Go to map →
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
