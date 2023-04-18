import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { CarIcon, CardIcon, FoodIcon, ShieldIcon } from '../../assets/icon';
export const Information = () => {
  const mock_data = [
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

  let props = {
    with: 60,
    height: 60,
  };

  return (
    <View style={styled.body}>
      <FlatList
        data={mock_data}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styled.container}>
            <Pressable style={styled.button}>
              {item.type == 'price' ? (
                <CardIcon props={props} />
              ) : item.type == 'distance' ? (
                <CarIcon props={props} />
              ) : item.type == 'food' ? (
                <FoodIcon props={props} />
              ) : (
                <ShieldIcon props={props} />
              )}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#22222299',
                  width: 100,
                  textAlign: "center"
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
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 115,
    width: 100,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    // alignItems: 'center',
    gap: 8,
    flexDirection: 'column',
    marginRight: 15,
  },
});
