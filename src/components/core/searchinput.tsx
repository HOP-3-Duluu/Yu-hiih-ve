import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import SearchIcon from '../../assets/icon/search';

export const SearchInput = ({ navigation }: any) => {


    return <SafeAreaView style={styles.container}>
        <View style={styles.body}>
            <View>
                <TextInput
                    placeholder='Enter category'
                />
            </View>
            <Pressable onPress={() => {

            }}>
                <SearchIcon />
            </Pressable>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 25,
        backgroundColor: '#f8f8f8',
        width: 340,
        display: "flex",
        flexDirection: 'row',
        borderRadius: 15
    },
    body:{
        width: 340,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderColor: 'grey',
        borderWidth: 0.3,
        borderRadius: 15,
    },
});