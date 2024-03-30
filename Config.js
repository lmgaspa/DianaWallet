import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from './Components/BackButton';

const Config = ({ navigation }) => {
    const handleBackupPress = () => {
        navigation.navigate('PasswordView');
    };

    const handleBackPress = () => {
        navigation.goBack(); // Função para voltar para a tela anterior
    };
    

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress}/>
            <TouchableOpacity style={styles.button} onPress={handleBackupPress}>
                <Text style={styles.buttonText}>View the PassPhrase</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        backgroundColor: 'blue',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Config;
