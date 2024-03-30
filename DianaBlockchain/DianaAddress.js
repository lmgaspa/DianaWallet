import 'react-native-get-random-values'
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRoute } from '@react-navigation/native';
import { Connection, PublicKey } from '@solana/web3.js';
import BackButton from '../Components/BackButton';

export default function DianaAddress({ navigation }) {

    const handleWithdrawPress = () => {
        navigation.navigate('DianaWithdraw', {address});
    };

    const handleDepositPress = () => {
        navigation.navigate('DianaDeposit', {address});
    };

    const handleBackPress = () => {
        navigation.goBack(); // Função para voltar para a tela anterior
    };

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <BackButton onPress={handleBackPress}/>
            <View style={styles.container}>
                <Text style={styles.coinName}>Diana Coin</Text>
            </View>
            <View>
                <Text style={styles.totalBalance}>Diana Coin Wallet don't work yet! Please await updates for next days!</Text>
               </View>
        </ScrollView>
    );
}

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