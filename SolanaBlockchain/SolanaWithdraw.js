import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import the FontAwesome5 icon
import BackButton from '../Components/BackButton';

export default function SolanaWithdraw({navigation}) {
    const route = useRoute();
    const { balance } = route.params;
    const [addressWithdraw, setAddressWithdraw] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState('');
    const [receiveAmount, setReceiveAmount] = useState('');

    const handleMaxClick = () => {
        setWithdrawalAmount(balance);
    };

    const handleBackPress = () => {
        navigation.goBack(); // Função para voltar para a tela anterior
    };

    const handleWithdraw = () => {
        // Check if withdrawal amount is not empty and is a valid number
        if (!withdrawalAmount || isNaN(parseFloat(withdrawalAmount))) {
            Alert.alert('Invalid Withdrawal Amount', 'Please enter a valid withdrawal amount.');
            return;
        }

        // Convert withdrawal amount to float
        const withdrawalAmountFloat = parseFloat(withdrawalAmount);

        // Check if withdrawal amount exceeds the balance
        if (withdrawalAmountFloat > balance) {
            Alert.alert('Insufficient Balance', 'You do not have enough balance to withdraw this amount.');
            return;
        }

        // Calculate receive amount
        const fee = 0.001 * withdrawalAmountFloat;
        const receiveAmountFloat = withdrawalAmountFloat - fee;
        setReceiveAmount(receiveAmountFloat.toFixed(2)); // Assuming you want to display receive amount with 2 decimal places

        // Logic to process Solana withdrawal
        // This is where you would perform the actual withdrawal process
        // You can call APIs, update the database, etc.

        // Optionally, you can reset the withdrawal amount field after successful withdrawal
        setWithdrawalAmount('');
    };

    const handleQRCodePress = () => {
        // Logic to handle QR code press
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress}/>
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
                    <FontAwesome5 name="qrcode" size={20} color="grey"/>
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
                <Text style={styles.balanceText}>{balance !== undefined ? balance : 0}</Text>
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
        backgroundColor: 'black',
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
        backgroundColor: 'blue',
        paddingVertical: 15, // Altere o valor para diminuir a altura do botão
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center', // Centralize o botão horizontalmente
        marginTop: 20, // Adicione um espaçamento superior
    },
    withdrawButtonText: {
        color: 'white',
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