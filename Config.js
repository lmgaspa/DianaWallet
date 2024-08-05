import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackButton from './Components/BackButton';

const Config = ({ navigation }) => {

    const handleBackupPress = () => {
        navigation.navigate('PasswordView');
    };

    const handlePrivacyPolicy = () => {
        navigation.navigate('PrivacyPolicy');
    };

    const handleBackPress = () => {
        navigation.goBack(); // Function to go back to the previous screen
    };

    const handleExitPress = async () => {
        try {
            await AsyncStorage.clear();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Splash' }],
            });
        } catch (error) {
            console.error('Failed to clear the async storage:', error);
        }
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress} />
            <TouchableOpacity style={styles.button} onPress={handleBackupPress}>
                <Text style={styles.buttonText}>View the PassPhrase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handlePrivacyPolicy}>
                <Text style={styles.buttonText}>View the Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleExitPress}>
                <Text style={styles.buttonText}>Exit Wallet</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    }, 
    button2: {
        width: '90%',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
});

export default Config;
