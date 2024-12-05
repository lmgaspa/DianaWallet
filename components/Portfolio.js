import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'

export default function Portfolio({ balance }) {
    const [showHaveCoins, setShowHaveCoins] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowHaveCoins(true);
        }, 3000);

        return () => clearTimeout(timeout); // Cleanup the timeout to avoid memory leaks
    }, []); // Run only once when the component mounts

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.circle}>
                    {showHaveCoins ? (
                        <>
                            <Text style={styles.balanceText}>{balance}</Text>
                        </>
                    ) : (
                        <Text style={styles.loadingText}>Loading...</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    balanceText: {
        color: 'white',
        fontSize: 18,
        marginTop: 10,
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#172121',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    loadingText: {
        color: 'white',
        fontSize: 18,
    },
});

/* <MaterialCommunityIcons name="lock" size={38} color="white" />
*/