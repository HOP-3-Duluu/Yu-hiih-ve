import {border, borderRadius} from '@mui/system';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';

// props = {
//  image_url: "",
//  text: ""
//  background: "", 
//  width: ,
//  height: ,
//  color: ""
// }
//

export const SmallCategory = ({props}: {props: any}) => {
  const styled = StyleSheet.create({
    body: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: props.background
        ? props.background
        : 'rgba(188, 154, 255, 0.183)',
      width: props.width ? props.width : 160,
      height: props.height ? props.height : 120,
      padding: 15,
      gap: 10,
      borderRadius: 15,
    },
    image: {
      width: 50,
      height: 50,
    },

    text: {
      fontWeight: '600',
      fontSize: 24,
      color: props.color ? props.color : 'white',
    },
  });

  return (
    <View style={styled.body}>
      <Image
        style={styled.image}
        source={{
          uri: `${props.image_url}`,
        }}
      />
      <Text style={styled.text}>{props.text}</Text>
    </View>
  );
};
