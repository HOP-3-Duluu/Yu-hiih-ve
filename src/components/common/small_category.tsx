import LottieView from 'lottie-react-native';
import { StyleSheet, Text, Image, Pressable } from 'react-native';


export const SmallCategory = ({ category_type }: any) => {


  return (
    <Pressable
      style={styled.body}>
      <LottieView
        autoPlay
        loop
        source={category_type.url}
        style={{ height: 60, width: 60 }}
      />
      {/* <Image source={category_type.url}
        style={{ height: 50, width: 50 }}
      /> */}
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
