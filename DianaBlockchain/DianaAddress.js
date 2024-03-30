import 'react-native-get-random-values'
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRoute } from '@react-navigation/native';
import { Connection, PublicKey } from '@solana/web3.js';

export default function DianaAddress() {
    const navigation = useNavigation();
    const route = useRoute();
    const [balance, setBalance] = useState(null);
    const address = route.params.address; 

    const handleWithdrawPress = () => {
        navigation.navigate('DianaWithdraw', {address});
    };

    const handleDepositPress = () => {
        navigation.navigate('DianaDeposit', {address});
    };

     useEffect(() => {
        const getAddressBalance = async () => {
            try {
                const address = route.params.address;
                const connection = new Connection('https://solscan.io/token/13X7StSxBuGwknsb1nuEEFhU1nwkXURXTRtEDDuozpsx');
                const publicKey = new PublicKey(address);
                const accBalance = await connection.getBalance(publicKey);
                setBalance(accBalance);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        getAddressBalance();
    }, [address]);

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <View style={styles.container}>
                <Text style={styles.coinName}>Diana Coin</Text>
            </View>
            <View>
                <Text style={styles.totalBalance}>Total Balance</Text>
                {balance !== null ? (
                    <Text style={styles.totalBalance}>$ {balance}</Text>
                ) : (
                    <Text style={styles.totalBalance}>Loading...</Text>
                )}
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleWithdrawPress}>
                    <Text style={styles.buttonText}>Withdraw</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleDepositPress}>
                    <Text style={styles.buttonText}>Deposit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

/*

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // Alterado para centralizar horizontalmente e verticalmente
        marginTop: 100,
    },
    coinName: {
        color: 'white',
        fontSize: 20,
        paddingBottom: 20,
    },
    totalBalance: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

*/
