import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

export default function DianaDeposit({ }) { // Recebendo o endereço como uma propriedade
    const route = useRoute();
    const { address } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DEPOSIT Diana Coin</Text>
            <Text style={styles.text2}>Your Diana Coin Deposit Address:</Text>
            <Text style={styles.text}>NETWORK: Solana Network</Text>
            <Text style={styles.text2}>{address}</Text
            >
            {/* Outros componentes relacionados ao depósito de Diana */}
            <QRCode
                value={address} // Aqui você define o valor do QR code como o endereço
                size={200} // Define o tamanho do QR code
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
    text2: {
        color: 'white',
    marginTop: 20,
    marginBottom: 20,
    }
});

