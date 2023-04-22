import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
export const Categories = ({navigation}: any) => {
  const mock_data = [
    {
      image_url: require('../../assets/image/nature.png'),
      name: 'Nature',
    },
    {
      image_url: require('../../assets/image/nature.png'),
      name: 'PC',
    },
    {
      image_url: require('../../assets/image/nature.png'),
      name: 'Restaurant',
    },
    {
      image_url: require('../../assets/image/nature.png'),
      name: 'Pool',
    },
    {
      image_url: require('../../assets/image/nature.png'),
      name: 'Billiard',
    },
    {
      image_url: require('../../assets/image/nature.png'),
      name: 'Movie Theater',
    },
  ];

  return (
    <View style={styled.body}>
      <View style={styled.container1}>
        <Text
          style={{
            marginBottom: 10,
            color: '#242424',
            fontWeight: '500',
            fontSize: 20,
          }}>
          Category
        </Text>
       <Pressable onPress={() => {
        navigation.navigate('categories')
       }}>
       <Text
          style={{
            fontWeight: '400',
            color: '#242424',
            opacity: 0.5,
            fontSize: 12,
          }}>
          See more categories
        </Text>
       </Pressable>
      </View>
      <FlatList
        data={mock_data}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styled.container}>
            <Pressable style={styled.button}>
              <Image style={{width: 40, height: 40}} source={item.image_url} />
              <Text style={{fontSize: 18, fontWeight: '400', marginLeft: 15}}>
                {item.name}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 60,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 30,
    marginRight: 21,
  },
});
