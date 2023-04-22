import { View, FlatList, Text, SafeAreaView, Image, StyleSheet, Button, Touchable, TouchableOpacity, Pressable, ImageBackground } from "react-native"
import { useState } from "react";
import { Fullheart } from "../../assets/icon/zurh";
import { Heart_icon } from "../../assets/icon";


export const Popular_section = () => {
  const data = [
    {
      id: 1,
      name: 'Tengis cinema',
      image: require('../../assets/image/tengisteatr.jpeg'),
    },
    {
      id: 2,
      name: 'imax cinema',
      image: require('../../assets/image/imaxx.jpeg'),
    },
    {
      id: 3,
      name: 'prime cineplex',
      image: require('../../assets/image/prime.jpeg'),
    },
    {
      id: 4,
      name: 'dreamy drinks',
      image: require('../../assets/image/dreamydrinks.jpeg')
    }
  ];

  const OneZurag = ({ item }: any) => {
    const [clicked, setClicked] = useState(false)


    return (
      <View style={styles.item} key={item.id} >
        <View style={styles.zuragcontainer}>
          <ImageBackground
            source={item.image}
            style={styles.zurag}
          >
            <View>
              <Pressable
                style={styles.button}
                onPress={() => {
                  setClicked(!clicked)
                }}>
                {
                  clicked ? <Fullheart /> : <Heart_icon props={{ width: 20, height: 20 }} />
                }
              </Pressable>
            </View>
            <Text style={styles.name}>{item.name} </Text>
          </ImageBackground>
        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Popular</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <OneZurag item={item} />}
        horizontal={true}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    marginLeft: 25,
    marginTop: 30
  },
  title: {
    marginBottom: 20,
    color: '#242424',
    fontWeight: '500',
    fontSize: 20,
  },
  zuragcontainer: {
    width: 230,
    height: 290,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "rgb(0, 0, 0, 0.04)"
  },
  item: {
    marginRight: 15,
  },
  zurag: {
    width: 230,
    height: 290,
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 20,
    justifyContent: "space-between"
  },
  name: {
    fontWeight: '700',
    fontSize: 21,
    color: 'white',
    marginBottom: 35,
    marginRight: 45
  },
  button: {
    zIndex: 2,
    width: 35,
    height: 35,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})