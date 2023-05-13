import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList } from "react-native";
import ReadMore from '@fawazahmed/react-native-read-more';

export const PopularPage = () => {

    const data = [
        {
            image: require('../assets/image/basketball.png'),
            name: 'Tengis Kino Teather',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quos a consequatur sed quod accusantium, vero fugiat iure voluptates laboriosam repudiandae fuga ut rem excepturi quasi quia nihil est vitae.'
        },
    ]


    return (
        <SafeAreaView style={styles.body}>
            <FlatList
                data={data}
                style={{ width: "90%", height: "100%" }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.texts}>
                                <Text style={styles.name}>{item.name}</Text>
                                <ReadMore
                                    numberOfLines={4}
                                    style={styles.textStyle}
                                    seeLessStyle={{ color: 'grey' }}
                                    seeMoreStyle={{ color: 'grey' }}
                                >
                                    {item.about}
                                </ReadMore>
                            </View>
                        </View>
                    )
                }}
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
        marginLeft: 10,
        width: "80%",
        overflow: 'hidden'
    },
    name: {
        fontWeight: "600",
        fontSize: 20
    },
    textStyle: {
        fontSize: 14,
    },
})