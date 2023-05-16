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
} from 'react-native';
import {Information} from '../components/common/information_section';
import {LocationImage} from '../components/common/location_image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const LocationPage = ({navigation}: any, {props}: any) => {
  props = {
    // MOCK DATA!
    // DELETE WHEN WE GET REAL DATA!
    images: [
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
    ],
    name: 'Tobasco is good',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    information: {}, // Something like this: {type: 'price',name: '1kino 10000T'}}
  };
  const [readMore, setReadMore] = useState(false);

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
      width: windowWidth - 60,
      fontSize: windowHeight > 700 ? 15.5 : 13,
      fontWeight: '300',
      paddingRight: 50,
      lineHeight: 15,
      maxHeight: readMore ? 600 : Math.round(windowHeight / 15 / 15) * 15,
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
      height: Math.round(windowHeight / 15 / 15) * 15 + 15,
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
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView>
        <View style={styled.body}>
          <LocationImage
            props={{
              images: props.images,
              navigation: navigation,
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
            <Text style={styled.read}>
              {readMore ? 'Read Less' : 'Read More'}
              <View style={styled.rotate}>
                <Text style={{fontWeight: '600', color: '#FF678B'}}> ^</Text>
              </View>
            </Text>
          </TouchableOpacity>
          <Information props={[]} />
          <Pressable
            style={styled.mapButton}
            onPress={() => {
              navigation.navigate('map');
            }}>
            <Text style={{fontWeight: '600', fontSize: 18, color: 'white'}}>
              Go to map →
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
