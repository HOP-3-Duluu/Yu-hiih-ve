import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SearchIcon } from '../../assets/icon';

const data = [
    {
        name: 'Internet Cafe',
        type: "pc"
    },
    {
        name: 'Movie Theater',
        type: "movie"
    },
    {
        name: 'Restaurant',
        type: "resturaunt"
    },

    {
        name: 'Karoake',
        type: "karoake"
    },
    {
        name: 'Pub',
        type: "pub"
    },
    {
        name: 'Sport Hall',
        type: "sport"
    },
    {
        name: 'Kids',
        type: "kids"
    },
    {
        name: 'Sport',
        type: "sport"
    },
    {
        name: 'Sport',
        type: "sport hall"
    },
    {
        name: 'Kids',
        type: "kids"
    },
    {
        name: 'Sport',
        type: "sport"
    },
    {
        name: 'Sport',
        type: "sport hall"
    },
    {
        name: 'Kids',
        type: "kids"
    },
    {
        name: 'Sport',
        type: "sport"
    },
    {
        name: 'Sport',
        type: "sport hall"
    },
    {
        name: 'Kids',
        type: "kids"
    },
    {
        name: 'Sport',
        type: "sport"
    },
    {
        name: 'Sport',
        type: "sport hall"
    },
    {
        name: 'Kids',
        type: "kids"
    },
    {
        name: 'Sport',
        type: "sport"
    },
    {
        name: 'Sport',
        type: "sport hall"
    },
]

export const SearchInput = ({ navigation, focus, setfocus }: any) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(data);


    const searchFilterFunction = (text: any) => {
        if (text) {
            const newData = data.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(data);
            setSearch(text);
        }
    };

    const Katogory = () => {
        return <FlatList
            data={filteredDataSource}
            scrollEnabled={false}
            renderItem={({ item }) => {
                return <View>
                    <TouchableOpacity onPress={() => {
                        setSearch(item.name);
                        setType(item.type)
                        navigation.navigate('softedCategories', { type: item.type, name: item.name })
                    }}>
                        <Text style={{ marginTop: 15, fontSize: 20 }}>{item.name}</Text>
                        <Text style={{ opacity: 0.2 }}>____________________________________________</Text>
                    </TouchableOpacity>
                </View>
            }
            }
        />
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.body}>
                    <TextInput
                        onFocus={() => {
                            setfocus(true)
                        }}
                        onBlur={() => {
                            setfocus(false)
                        }}
                        onChangeText={(e) => {
                            searchFilterFunction(e)
                        }}
                        value={search}
                        style={styles.input}
                        placeholder='Enter category'
                    />
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('softedCategories', { type: type, name: search })
                        }}>
                        <SearchIcon />
                    </Pressable>
                </View>
                <ScrollView style={focus ? styles.search : { display: 'none' }}>
                    {focus ? <Katogory /> : null}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "92%",
        display: "flex",
        borderRadius: 15,
        marginTop: 10,
        marginLeft: '2%',
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
        backgroundColor: '#f8f8f8',
    },
    input: {
        width: 290,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
    },
    button: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        maxHeight: "76%",
        display: 'flex',
        paddingLeft: '3%'
    }
});
