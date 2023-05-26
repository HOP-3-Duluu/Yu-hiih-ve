import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { CarIcon, CardIcon, FoodIcon, ShieldIcon } from '../../assets/icon';
export const Information = ({props}: any) => {

   const propss = [
    {
      type: 'like',
      name: props?.cnt,
    },
    {
      type: 'distance',
      name: '2km',
    },
    {
      type: 'price',
      name: props?.price,
    },
  ];

  let Sizeprops = {
    with: 60,
    height: 60,
  };

  return (
    <View style={styled.body}>
      <FlatList
        data={propss}
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
