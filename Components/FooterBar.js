import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function FooterBar() {
    return (
        <View style={styles.container}>
            <View style={styles.square}>
                <Text style={styles.text}>X</Text>
                <Text style={styles.text}>X</Text>
                <Text style={styles.text}>X</Text>
                <Text style={styles.text}>X</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    square: {
        flexDirection: 'row',
        width: 300,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E3232',
        borderRadius: 20,
        marginHorizontal: 8,
    },
    text: {
        fontSize: 24,
        color: 'white',
    },
});
