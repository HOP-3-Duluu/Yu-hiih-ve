import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

export const HowManyPeople = () => {
    const peopleType = [
        { name: '1-3 people' },
        { name: '3-5 people' },
        { name: '5-7 people' },
        { name: '7-9 people' },
        { name: '10+ people' },
    ];

    const [number, setNumber] = useState(6);
    return (
        <View style={styled.body}>
            <Text style={styled.peopleTypeText}>How many people are going?</Text>
            <FlatList
                data={peopleType}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <Pressable style={index === number ? (styled.peopleTypeSwitched):(styled.peopleType)} onPress={() => {
                        setNumber(index)
                    }}>
                        <Text>{item.name}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

const styled = StyleSheet.create({
    body: {
        marginLeft: 25,
        marginTop: 15
    },
    peopleType: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
        borderRadius: 30,
        borderColor: 'grey',
        marginRight: 10,
    },
    peopleTypeSwitched: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
        borderRadius: 30,
        backgroundColor: "red",
        borderColor: 'grey',
        marginRight: 10,
    },
    peopleTypeText: {
        color: '#242424',
        fontWeight: '400',
        letterSpacing: 0.02,
        fontSize: 20,
        marginBottom: 15,
    },
});