import 'react-native-get-random-values';
import React from "react";
import { View, ScrollView, StyleSheet } from 'react-native'
import CryptoTracker from "./CryptoTracker/CryptoTracker";
import Balance from "./Balance";
import BalanceofCoins from "./BalanceOfCoins";

export default function Access({ route }) {
    const { address } = route.params;
    
    return (
        <ScrollView>
                <Balance />
                <BalanceofCoins address={address} />
                <View style={styles.container}>
                <CryptoTracker />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});