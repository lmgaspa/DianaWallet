import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import btc from '../assets/images/btc.png';
import sol from '../assets/images/sol.png';
import dia from '../assets/images/dia.png';
import { useRoute } from '@react-navigation/native';
import { Connection, PublicKey } from '@solana/web3.js';

export default function BalanceofCoins() {
    const navigation = useNavigation();
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

    const goToBitcoinAddress = () => {
        const address = route.params.address;
        navigation.navigate('BitcoinAddress', {address}); // Certifique-se de que 'SolanaAddress' é o nome correto da sua tela
    };

    const goToSolanaAddress = () => {
        const address = route.params.address;
        navigation.navigate('SolanaAddress', {address}); // Certifique-se de que 'SolanaAddress' é o nome correto da sua tela
    };

    const goToDianaAddress = () => {
        const address = route.params.address;
        navigation.navigate('DianaAddress', {address}); // Certifique-se de que 'SolanaAddress' é o nome correto da sua tela
    };

    return (
        <TouchableOpacity onPress={goToSolanaAddress} style={styles.container}>
                <View style={styles.coinRow}>
                    <View style={styles.coinColumn}>
                        <Image style={styles.coinImage} source={sol} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}> Solana</Text>
                            <Text style={styles.subtitle}> SOL</Text>
                        </View>
                    </View>
                    <View style={styles.priceChangeColumn}>
                        <View style={[styles.tableColumn2]}>
                            <Text style={[styles.quantityofCoin]}>{balance !== null ? balance : 'Loading...'}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 20,
    },
    coinstext: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'left',
    },
    coinColumn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    imageContainer: {
        alignItems: 'flex-start', // Alinha a imagem à esquerda
    },
    coinImage: {
        width: 40,
        height: 40,
        marginRight: 5,
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 2,
    },
    subtitle: {
        fontStyle: 'italic',
        color: 'white',
        paddingBottom: 2,
    },
    coinRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        height: 80,
        width: '95%',
        overflow: 'hidden',
        backgroundColor: '#172121',
        
        marginBottom: 10,
    },
    tableColumn2: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    quantityofCoin: {
        color: 'white',
        alignItems: 'flex-end',
        paddingBottom: 5,
    },
});

/*

<><TouchableOpacity onPress={goToBitcoinAddress} style={styles.container}>
            <Text style={styles.coinstext}>Your Coins:</Text>
            <View style={styles.coinRow}>
                <View style={styles.coinColumn}>
                    <Image style={styles.coinImage} source={btc} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}> Bitcoin</Text>
                        <Text style={styles.subtitle}> BTC</Text>
                    </View>
                </View>
                <View style={styles.priceChangeColumn}>
                    <View style={[styles.tableColumn2]}>
                        <Text style={[styles.quantityofCoin]}>{balance !== null ? balance : 'Loading...'}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity><TouchableOpacity onPress={goToSolanaAddress} style={styles.container}>
                <View style={styles.coinRow}>
                    <View style={styles.coinColumn}>
                        <Image style={styles.coinImage} source={sol} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}> Solana</Text>
                            <Text style={styles.subtitle}> SOL</Text>
                        </View>
                    </View>
                    <View style={styles.priceChangeColumn}>
                        <View style={[styles.tableColumn2]}>
                            <Text style={[styles.quantityofCoin]}>{balance !== null ? balance : 'Loading...'}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToDianaAddress} style={styles.container}>
                <View style={styles.coinRow}>
                    <View style={styles.coinColumn}>
                        <Image style={styles.coinImage} source={dia} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}> Diana Coin</Text>
                            <Text style={styles.subtitle}> Diana Coin</Text>
                        </View>
                    </View>
                    <View style={styles.priceChangeColumn}>
                        <View style={[styles.tableColumn2]}>
                            <Text style={[styles.quantityofCoin]}>{balance !== null ? balance : 'Loading...'}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity></>

            */