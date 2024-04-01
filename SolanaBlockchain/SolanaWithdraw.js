import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import the FontAwesome5 ico
import { Connection, PublicKey } from '@solana/web3.js';
import BackButton from '../Components/BackButton';

export default function SolanaWithdraw({ navigation }) {
    const route = useRoute();
    const { balance: initialBalance } = route.params; // Renomeando a variável para evitar conflitos de nome
    const [balance, setBalance] = useState(initialBalance); // Definindo a variável de estado balance

    const [addressWithdraw, setAddressWithdraw] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState('');
    const [receiveAmount, setReceiveAmount] = useState('');

    const handleMaxClick = () => {
        setWithdrawalAmount(balance);
    };

    const handleBackPress = () => {
        navigation.goBack(); // Função para voltar para a tela anterior
    };

    useEffect(() => {
        const getAddressBalance = async () => {
            try {
                const address = route.params.address;
                const connection = new Connection('https://api.mainnet-beta.solana.com');
                const publicKey = new PublicKey(address);
                const accBalance = await connection.getBalance(publicKey);
                setBalance(accBalance); // Atualizando a variável de estado balance com o saldo recuperado
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        getAddressBalance();
    }, [route.params.address]); // Adicionando route.params.address como dependência do useEffect


    const handleWithdraw = async () => {
        // Check if withdrawal amount is not empty and is a valid number
        if (!withdrawalAmount || isNaN(parseFloat(withdrawalAmount))) {
            Alert.alert('Invalid Withdrawal Amount', 'Please enter a valid withdrawal amount.');
            return;
        }
    
        // Convert withdrawal amount to float
        const withdrawalAmountFloat = parseFloat(withdrawalAmount);
    
        // Check if withdrawal amount is less than 0.001 SOL
        if (withdrawalAmountFloat < 0.001) {
            Alert.alert('Minimum Withdrawal Amount', 'The minimum withdrawal amount is 0.001 SOL.');
            return;
        }
    
        // Check if withdrawal amount exceeds the balance
        if (withdrawalAmountFloat > balance) {
            Alert.alert('Insufficient Balance', 'You do not have enough balance to withdraw this amount.');
            return;
        }
    
        // Calculate receive amount
        const fee = 0.001;
        const receiveAmountFloat = withdrawalAmountFloat - fee;
    
        // Logic to process Solana withdrawal
        // Here you would send the specified amount to the withdrawal address
        // You can call APIs, update the database, etc.
    
        // Display receive amount
        setReceiveAmount(receiveAmountFloat.toFixed(3)); // Display with 3 decimal places
    
        // Optionally, you can reset the withdrawal amount field after successful withdrawal
        setWithdrawalAmount('');
    
        // Optionally, you can also send the fee to the specified address
        const address = 'AKaJEbYh4nknfg657NBMF6STz2VXe3qFNYsRkrL5cg3j';
        try {
            const connection = new Connection('https://api.mainnet-beta.solana.com');
            const publicKey = new PublicKey(address);
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: publicKey,
                    lamports: 1000000, // 0.001 SOL in lamports
                })
            );
            // Sign and send the transaction
            const signature = await window.solana.signAndSendTransaction(transaction);
            console.log('Transaction Signature:', signature);
        } catch (error) {
            console.error('Error processing withdrawal:', error);
            Alert.alert('Error', 'Failed to process withdrawal. Please try again later.');
        }
    };

    const handleQRCodePress = () => {
        // Logic to handle QR code press
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress} />
            <Text style={styles.title}>Withdraw Solana</Text>
            <Text style={styles.label}>Address</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter withdrawal address"
                    value={addressWithdraw}
                    onChangeText={text => setAddressWithdraw(text)}
                    multiline={false}
                    textAlignVertical="top"
                />
                <TouchableOpacity style={styles.qrCodeIcon} onPress={handleQRCodePress}>
                    <FontAwesome5 name="qrcode" size={20} color="grey" />
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Network: Solana</Text>
            <Text style={styles.label}>Withdrawal Amount</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.amountInput}
                    placeholder="Minimum 0"
                    value={withdrawalAmount}
                    onChangeText={text => setWithdrawalAmount(text)}
                />
                <TouchableOpacity onPress={handleMaxClick}>
                    <Text style={styles.maxText}>MAX</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.availableContainer}>
                <Text style={styles.availableText}>Available: </Text>
                <Text style={styles.balanceText}> {balance !== null ? (
                    <Text style={styles.totalBalance}>$ {balance !== null ? balance / 10 ** 9 : 'Loading...'}</Text>
                ) : (
                    <Text style={styles.totalBalance}>Loading...</Text>
                )}</Text>
                <Text style={styles.solText}> SOL</Text>
            </View>
            <Text style={styles.label}>Receive Amount {receiveAmount} SOL</Text>
            <Text style={styles.label3}>Withdrawal Fee: 0.001 SOL</Text>
            <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
                <Text style={styles.withdrawButtonText}>WITHDRAW</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginTop: 70,
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        color: 'white',
        marginTop: 10,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Align items and "MAX" button horizontally
        marginBottom: 10,
    },
    amountInput: {
        flex: 1,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    maxText: {
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    availableContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    availableText: {
        color: 'white',
    },
    balanceText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    solText: {
        color: 'white',
    },
    withdrawContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    withdrawButton: {
        backgroundColor: 'white',
        paddingVertical: 10, // Altere o valor para diminuir a altura do botão
        paddingHorizontal: 20,
        borderRadius: 15,
        alignSelf: 'center', // Centralize o botão horizontalmente
        marginTop: 20, // Adicione um espaçamento superior
    },
    withdrawButtonText: {
        color: 'black',
        fontSize: 14, // Diminua o tamanho da fonte
    },
    qrCodeIcon: {
        position: 'absolute',
        right: 10, // Adjust the position of the QR code icon
        top: 10,
    },
    label2: {
        color: 'white',
    },
    label3: {
        color: 'white',
        marginBottom: 10,
    },
});