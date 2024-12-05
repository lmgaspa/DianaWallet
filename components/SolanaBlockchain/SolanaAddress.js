import 'react-native-get-random-values'
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Connection, PublicKey } from '@solana/web3.js';
import BackButton from '../../components/BackButton'

export default function SolanaAddress() {
    const navigation = useNavigation();
    const route = useRoute();
    const [balance, setBalance] = useState(null);
    const address = route.params.address; 

    const handleBackPress = () => {
        navigation.goBack(); // Função para voltar para a tela anterior
    };

    const handleWithdrawPress = () => {
        navigation.navigate('SolanaWithdraw', {address});
    };

    const handleDepositPress = () => {
        navigation.navigate('SolanaDeposit', {address});
    };

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
    }, [address]);

    return (
        <ScrollView>
            <BackButton onPress={handleBackPress}/>
            <View style={styles.container}>
                <Text style={styles.coinName}>Solana</Text>
            </View>
            <View>
                <Text style={styles.totalBalance}>Total Balance</Text>
                {/* Mostra o saldo apenas se ele não for null */}
                {balance !== null ? (
                    <Text style={styles.totalBalance}>$ {balance !== null ? balance / 10**9 : 'Loading...'}</Text>
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
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        borderRadius: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});