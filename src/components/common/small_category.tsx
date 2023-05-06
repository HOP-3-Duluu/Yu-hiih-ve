import {useState} from 'react';
import {StyleSheet, Text, Image, Pressable} from 'react-native';


export const SmallCategory = ({category_type, navigation}: any) => {

  
  return (
    <Pressable
      onPress={() => {
        const name = category_type.name
        const url = category_type.url
        navigation.navigate('softedCategories', {name, url})
      }}
      style={styled.body}>
      <Image style={styled.image} source={category_type.url} />
      <Text style={styled.text}>{category_type.name}</Text>
      
    </Pressable>
  );
};

const styled = StyleSheet.create({
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    width: 160,
    height: 120,
    padding: 15,
    gap: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    marginBottom: 20,
    marginLeft: 12,
    marginRight: 12
  },
  image: {
    width: 50,
    height: 50,
  },

  text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#242424',
  },
});
