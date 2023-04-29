import { SafeAreaView, Text, View, StyleSheet, Image, Pressable } from "react-native"
import { MapIcon } from "../../assets/icon"



export const Header = ({ navigation }: any) => {


    return <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}>
                Юу Хийх Вэ?
            </Text>
            <View style={styles.icon}>
                <Pressable onPress={() => {
                    // navigation.navigate('')
                }}>
                    <MapIcon />
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: "2%"
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
    },
    icon: {
        width: "40%",
        height: 25,
        display: "flex",
        flexDirection: 'column',
        alignItems: 'flex-end'
    }
});