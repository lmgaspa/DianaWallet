import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import BackButton from '../Components/BackButton';

export default function SolanaDeposit({ navigation }) { // Recebendo o endereço como uma propriedade
    const route = useRoute();
    const { address } = route.params;

    const handleBackPress = () => {
        navigation.goBack(); // Função para voltar para a tela anterior
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress}/>
            <Text style={styles.text}>DEPOSIT SOLANA</Text>
            <Text style={styles.text2}>Your Solana Deposit Address:</Text>
            <Text style={styles.text}>NETWORK: SOLANA</Text>
            <Text style={styles.text2}>{address}</Text
            >
            {/* Outros componentes relacionados ao depósito de Solana */}
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

