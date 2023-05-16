import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, Pressable } from "react-native";
import ReadMore from '@fawazahmed/react-native-read-more';
import { Fullheart, Heart_icon } from "../assets";
import { useState } from "react";

export const PopularPage = ({ navigation }: any) => {

    const data = [
        {
            id: 1,
            image: require('../assets/image/basketball.png'),
            name: 'Tengis Cinema',
            about: 'Lorem ipsum dolor sit amet awadaad, consectetur adipisicing elit. Labore quos a consequatur sed quod accusantium, vero fugiat iure voluptates laboriosam repudiandae fuga ut rem excepturi quasi quia nihil est vitae.'
        },
        {
            id: 2,
            image: require('../assets/image/basketball.png'),
            name: 'Prime Cinema',
            about: 'Lorem ipsum dolor sit amet awadaad, consectetur adipisicing elit. Labore quos a consequatur sed quod accusantium, vero fugiat iure voluptates laboriosam repudiandae fuga ut rem excepturi quasi quia nihil est vitae.'
        },
        {
            id: 3,
            image: require('../assets/image/basketball.png'),
            name: 'Imax Cinema',
            about: 'Lorem ipsum dolor sit amet awadaad, consectetur adipisicing elit. Labore quos a consequatur sed quod accusantium, vero fugiat iure voluptates laboriosam repudiandae fuga ut rem excepturi quasi quia nihil est vitae.'
        },
        {
            id: 4,
            image: require('../assets/image/basketball.png'),
            name: 'Urguu Cinema',
            about: 'Lorem ipsum dolor sit amet awadaad, consectetur adipisicing elit. Labore quos a consequatur sed quod accusantium, vero fugiat iure voluptates laboriosam repudiandae fuga ut rem excepturi quasi quia nihil est vitae.'
        },
        {
            id: 5,
            image: require('../assets/image/basketball.png'),
            name: 'Urguu Cinema',
            about: 'Lorem ipsum dolor sit amet awadaad, consectetur adipisicing elit. Labore quos a consequatur sed quod accusantium, vero fugiat iure voluptates laboriosam repudiandae fuga ut rem excepturi quasi quia nihil est vitae.'
        },
        {
            id: 6,
            image: require('../assets/image/basketball.png'),
            name: 'Urguu Cinema',
            about: 'Lorem ipsum dolor sit amet awadaad, consectetur adipisicing elit. Labore quos a consequatur sed quod accusantium, vero fugiat iure voluptates laboriosam repudiandae fuga ut rem excepturi quasi quia nihil est vitae.'
        },
    ]


    const Places = ({ item }: any) => {
        const [clicked, setClicked] = useState(false)
        

        return (
            <Pressable onPress={() => (
                navigation.navigate('detail')
            )}>
                <View style={styles.container} key={item.id}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.texts}>
                        <View style={styles.topic}>
                            <Text style={styles.name}>{item.name}</Text>
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
                        <ReadMore
                            style={styles.about}
                            numberOfLines={3}
                            seeLessStyle={{ color: 'grey' }}
                            seeMoreStyle={{ color: 'grey' }}
                        >
                            {item.about}
                        </ReadMore>
                    </View>
                </View>
            </Pressable>
        )
    }


    return (
        <SafeAreaView style={styles.body}>
            <FlatList
                data={data}
                style={{ width: "90%", height: "100%" }}
                renderItem={({ item }) => <Places item={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center'
    },
    container: {
        borderRadius: 20,
        backgroundColor: '#F8F8F8',
        borderColor: '#E7E9EB',
        borderWidth: 0.5,
        flexDirection: 'row',
        padding: 13,
        marginTop: 10,
    },
    image: {
        width: 60,
        height: 60
    },
    texts: {
        // marginTop: 5,
        marginLeft: 10,
        width: "80%",
    },
    topic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '97%',
    },
    name: {
        fontWeight: "600",
        fontSize: 20,
    },
    button: {
        zIndex: 2,
        width: 35,
        height: 35,
        backgroundColor: '#E7E9EB',
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    about: {
        marginTop: 5
    },
})