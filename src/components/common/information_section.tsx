import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { CarIcon, CardIcon, FoodIcon, ShieldIcon } from '../../assets/icon';
export const Information = ({props}: any) => {
      // MOCK DATA!
    // DELETE WHEN WE GET REAL DATA!
   props = [
    {
      type: 'price',
      name: '1kino 10000T',
    },
    {
      type: 'distance',
      name: '2km',
    },
    {
      type: 'food',
      name: 'Restaurant',
    },
    {
      type: 'safety',
      name: 'Insurance ',
    },
    {
      type: 'price',
      name: 'Cool',
    },
  ];

  let Sizeprops = {
    with: 60,
    height: 60,
  };

  return (
    <View style={styled.body}>
      <FlatList
        data={props}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styled.container}>
            <Pressable style={styled.button}>
              {item.type == 'price' ? (
                <CardIcon props={Sizeprops} />
              ) : item.type == 'distance' ? (
                <CarIcon props={Sizeprops} />
              ) : item.type == 'food' ? (
                <FoodIcon props={Sizeprops} />
              ) : (
                <ShieldIcon props={Sizeprops} />
              )}
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#22222299',
                  width: 82,
                  textAlign: 'center',
                }}>
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
    marginLeft: 20,
    marginRight: 10,
    height: 115,
    marginTop: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 115,
  },
  button: {
    height: 100,
    width: 80,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    // alignItems: 'center',
    gap: 8,
    flexDirection: 'column',
    marginRight: 7,
  },
});
