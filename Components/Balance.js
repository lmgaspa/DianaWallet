import 'react-native-get-random-values';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Connection, PublicKey } from '@solana/web3.js';

export default function Balance() {
    const route = useRoute();
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const getAddressBalance = async () => {
            try {
                const address = route.params.address;
                const connection = new Connection('https://api.mainnet-beta.solana.com');
                const publicKey = new PublicKey(address);
                const accBalance = await connection.getBalance(publicKey);
                setBalance(accBalance);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        getAddressBalance();
    }, [route.params.address]);

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <View style={styles.container}>
                <Text style={styles.totalBalance}>Total Balance</Text>
                <Text style={styles.totalBalanceValue}>$ {balance !== null ? balance : 'Loading...'}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 100,
    },
    totalBalance: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 20,
    },
    totalBalanceValue: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 20,
    }
});
