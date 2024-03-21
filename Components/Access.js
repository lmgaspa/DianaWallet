import 'react-native-get-random-values';
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Portfolio from "./Portfolio";
import CryptoTracker from "../CryptoTracker/CryptoTracker";
import Balance from "./Balance";
import FooterBar from './FooterBar'
import BalanceofCoins from "./BalanceofCoins";

export default function Access({ route }) {
    const { address } = route.params;
    
    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
                <Balance />
                <BalanceofCoins address={address} />
                <View style={styles.container}>
                <CryptoTracker />
                <FooterBar />
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
