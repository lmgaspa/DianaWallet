import 'react-native-get-random-values';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Connection, PublicKey } from '@solana/web3.js';
import { MaterialIcons } from '@expo/vector-icons';

export default function Balance() {
    const route = useRoute();
    const navigation = useNavigation();
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

    const goToSetupPage = () => {
        navigation.navigate('Config'); // Navega para a página Setup.js
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.balanceContainer}>
                    <Text style={styles.totalBalance}>Total Balance</Text>
                    <TouchableOpacity onPress={goToSetupPage}>
                        <MaterialIcons name="settings" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.totalBalanceValue}>$ {balance !== null ? balance / 10**9 : 'Loading...'}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 100,
    },
    balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Coloca o texto à esquerda e o ícone à direita
        alignItems: 'center',
        marginBottom: 10,
        width: '100%', // Garante que o espaçamento seja total
        paddingHorizontal: 20, // Espaçamento horizontal
    },
    totalBalance: {
        color: 'white',
        fontSize: 18,
    },
    totalBalanceValue: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 20, // Adiciona um espaçamento à esquerda para o valor do saldo
        fontWeight: 'bold'
    }
});