import React from "react";
import { View, Text, Image, FlatList, Pressable, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { LeftArrow } from "../assets/icon";

export const SoftedCategoriesPage = (props: any) => {



    const navigation = props.navigation

    const data = [props.route.params]


    return (
        <SafeAreaView>
            <View style={style.container}>
                <View style={{ width: '90%' }}>
                    <View style={style.head}>
                        <Pressable
                            style={style.leftArrow}
                            onPress={() => (
                                navigation.pop()
                            )}
                        >
                            <LeftArrow />
                        </Pressable>
                        <View style={{ width: '75%', alignItems: 'center', marginLeft: 20 }}>
                            <Text style={{ fontSize: 30, fontWeight: '600' }}>{props.route.params.name}</Text>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        style={{ marginTop: 10, height: "93%" }}
                        renderItem={({ item }) => (
                            <Pressable
                                style={style.body}
                                onPress={() => (
                                    navigation.navigate('detail')
                                )}
                            >
                                <Image source={item.url} style={{ width: 25, height: 25 }} />
                                <Text style={style.name}>
                                    {item.name}
                                </Text>
                            </Pressable>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    body: {
        height: 50,
        width: '100%',
        borderColor: 'grey',
        borderWidth: 0.2,
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    name: {
        marginLeft: 10,
        fontSize: 20
    },
    leftArrow: {
        left: 20,
        width: 20,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    head: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
    }
})