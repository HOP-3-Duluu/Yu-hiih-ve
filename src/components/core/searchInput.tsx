import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { SearchIcon } from '../../assets/icon';

export const SearchInput = ({ navigation }: any) => {


    return (
        <SafeAreaView style={styles.container}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        width: "92%",
        display: "flex",
        flexDirection: 'row',
        borderRadius: 15,
        marginTop: 10,
        marginLeft: '2%'
    },
    body: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderColor: 'grey',
        borderWidth: 0.3,
        borderRadius: 15,
    },
});
