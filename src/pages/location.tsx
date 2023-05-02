import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
import {Image} from 'react-native-svg';
import {LeftArrow} from '../assets/icon/left_arrow';
import {Information} from '../components/common/information_section';
import {LocationImage} from '../components/common/location_image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const LocationPage = ({navigation}: any, {props}: any) => {
  props = {
    // MOCK DATA!
    // DELETE WHEN WE GET REAL DATA!
    image_url:
      'https://cdn.shopify.com/s/files/1/1917/6033/products/tabasco_1024x1024.jpg?v=1613071500',
    name: 'Tobasco is good',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    information: {}, // Something like this: {type: 'price',name: '1kino 10000T'}}
  };
  const [readMore, setReadMore] = useState(false);

  const styled = StyleSheet.create({
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 3,
      maxHeight: windowHeight > 700 ? windowHeight : 700
    },
    
    header: {
      width: windowWidth - 60,
      fontSize: 30,
      fontWeight: '500',
      marginTop: 15,
    },
    text: {
      color: 'rgba(0,0,0,0.7)',
      width: windowWidth - 60,
      fontSize: 13,
      fontWeight: '300',
      paddingRight: 50,
      lineHeight: 15,
      height: readMore ? 300 : 50,
    },
    dots: {
      position: 'absolute',
      bottom: 0,
      right: 30,
      display: readMore ? 'none' : 'flex',
    },
    read: {
      width: windowWidth - 60,
      fontWeight: '300',
      color: '#FF678B',
      marginTop: -5,
      marginBottom: readMore ? -10 : 0,
    },
    rotate: {
      transform: readMore ? [{translateY: 5}] : [{rotateX: '180deg'}],
    },
    scroll: {
      height: 60,
    },
    mapButton: {
      width: windowWidth - 50,
      backgroundColor: '#FF678B',
      height: 70,
      borderRadius: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 10,
    },
    backButton: {
      width: 60,
      height: 60,
      backgroundColor: 'white',
      position: 'absolute',
      top: 25,
      left: 38,
      zIndex: 10,
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{scale: 0.5}],
    },
  });
  console.log(windowHeight);
  return (
    <ScrollView>
      <SafeAreaView style={styled.body}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styled.backButton}>
          <LeftArrow />
        </Pressable>
        <LocationImage
          props={{
            image_url:
              'https://cdn.shopify.com/s/files/1/0226/8187/8608/products/14005011_0_1280x1280_bebc5ed4-835b-45a9-b660-e18c59ce10c6.jpg?v=1605512532',
          }}
        />
        <Text style={styled.header}>{props.name}</Text>
        <View>
          {readMore ? (
            <View style={styled.scroll}>
              <ScrollView>
                <Text style={styled.text}>{props.description}</Text>
              </ScrollView>
            </View>
          ) : (
            <Text style={styled.text}>{props.description}</Text>
          )}

          <Text style={styled.dots}>...</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={e => setReadMore(!readMore)}>
          {/* <Text style={styled.read}> */}
          <Text style={styled.read}>
            {readMore ? 'Read Less' : 'Read More'}
            <View style={styled.rotate}>
              <Text style={{fontWeight: '600', color: '#FF678B'}}> ^</Text>
            </View>
          </Text>
        </TouchableOpacity>
        <Information props={[]} />
        <View style={{marginTop: 90}} />
        <Pressable
          style={styled.mapButton}
          onPress={() => {
            navigation.navigate('Home'); // <----------- ADD NAVIGATION HERE!!1!1
          }}>
          <Text style={{fontWeight: '600', fontSize: 18, color: 'white'}}>
            Go to map →
          </Text>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
};
