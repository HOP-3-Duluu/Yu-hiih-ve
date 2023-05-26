import React, { useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, Pressable } from "react-native";
import ReadMore from '@fawazahmed/react-native-read-more';
import { Fullheart, Heart_icon } from "../assets";
import { useState } from "react";
import AwsAPI from "../library";

export const PopularPage = ({ navigation }: any) => {
    const [apiData, setApiData] = useState([]);


    const Places = ({ item }: any) => {
        const [clicked, setClicked] = useState(true)
        return (
            <Pressable
                onPress={() => {
                    const name = item?.name
                    const description = item?.description
                    const phoneNumber = item?.phoneNumber
                    const cnt = item?.cnt
                    const price = item?.price
                    const socialAdd = item?.socialAddress
                    const url = item?.url
                    navigation.navigate('detail', { name, description, phoneNumber, cnt, price, socialAdd, url })
                }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: "column", gap: 5 }}>
                        {item?.category === "pc" && <Image source={require("../assets/image/play_station.png")} style={styles.image} />}
                        {item?.category === "movie" && <Image source={require("../assets/image/cinema.png")} style={styles.image} />}{item?.category === "resturaunt" && <Image source={require("../assets/image/ramenNoodles.png")} style={styles.image} />}
                        {item?.category === "pub" && <Image source={require("../assets/image/pub.png")} style={styles.image} />}
                        {item?.category === "karoake" && <Image source={require("../assets/image/karaoke.png")} style={styles.image} />}
                        <Text style={styles.texts}>like: {item?.cnt}</Text>
                    </View>
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
                            {item?.description}
                        </ReadMore>
                    </View>
                </View>
            </Pressable>
        )
    }

    useEffect(() => {
        AwsAPI.get('getPostOfLocations').then(res => {
            setApiData(res?.data?.data.filter((item: any) => item.cnt >= 1))
        });
    }, [AwsAPI]);

    return (
        <SafeAreaView style={styles.body}>
            <FlatList
                data={apiData.sort((a, b) => b?.cnt - a?.cnt)}
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