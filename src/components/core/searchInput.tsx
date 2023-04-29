import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { SearchIcon } from '../../assets/icon';

export const SearchInput = ({ navigation }: any) => {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter category'
                    />
                </View>
                <Pressable
                    style={styles.button}
                    onPress={() => {

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
        paddingRight: 15,
        borderColor: 'grey',
        borderWidth: 0.3,
        borderRadius: 15,
    }, 
    input: {
        width: 290,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15
    },
    button: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
