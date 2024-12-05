import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import BackButton from '../BackButton';

export default function SolanaDeposit({ navigation }) {
    const route = useRoute();
    const { address } = route.params;

    const handleBackPress = () => {
        navigation.goBack(); // Function to go back to the previous screen
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress} />
            <Text style={styles.text}>DEPOSIT SOLANA</Text>
            <Text style={styles.text2}>Your Solana Deposit Address:</Text>
            <Text style={styles.text}>NETWORK: SOLANA</Text>
            <Text style={styles.text2}>{address}</Text>
            {/* QR Code */}
            <QRCode value={address} size={200} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Added for better contrast
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    text2: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});
