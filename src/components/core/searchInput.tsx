import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SearchIcon } from '../../assets/icon';

const data = [
    { name: 'Restaurant' }, { name: 'Movie Theater' }, { name: 'Game Center' },
]

export const SearchInput = ({ navigation }: any) => {

    const [focus, setfocus] = useState(false)
    const [search, setSearch] = useState('');
    const [name, setName] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(data);

    useEffect(() => {
       console.log(name);
    }, [name]);

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
        return <View style={styles.search}>
            <FlatList
                style={styles.search}
                data={filteredDataSource}
                scrollEnabled={false}
                renderItem={({ item }) => {
                    return <View>
                        <Text style={{ opacity: 0.2 }}>____________________________________________</Text>
                        <TouchableOpacity onPress={() => {
                            setSearch(item.name);
                            navigation.navigate('softedCategories', {type: 'resturaunt',  name: name})
                        }}>
                            <Text style={{ marginTop: 15, fontSize: 20 }}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                }
                }
            />
        </View >
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
                            navigation.navigate('softedCategories', {type: 'resturaunt',  name: name})
                        }}>
                        <SearchIcon />
                    </Pressable>
                </View>
            </View>
            <View>
                {
                    focus ? <View><Katogory /></View> : null
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
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
    search: {
        marginLeftL: '2%',
        paddingLeft: '3%',
        width: '95%',
        height: "100%",
    }
});
