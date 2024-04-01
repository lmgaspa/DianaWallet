import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackButton from './Components/BackButton';

const PasswordView = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack(); // Função para voltar para a tela anterior
};

  const [mnemonic, setMnemonic] = useState('');

  useEffect(() => {
    retrieveMnemonic();
  }, []);

  const retrieveMnemonic = async () => {
    try {
      const savedMnemonic = await AsyncStorage.getItem('solanaWallet');
      if (savedMnemonic) {
        setMnemonic(savedMnemonic);
      } else {
        console.log('Nenhum mnemônico encontrado no AsyncStorage.');
      }
    } catch (error) {
      console.error('Erro ao recuperar mnemônico do AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <BackButton onPress={handleBackPress}/>
      <Text style={styles.title}>DON'T SHARE YOU PASSPHRASE!</Text>
      <Text style={styles.text}>Your secret phrase:</Text>
      <View style={styles.mnemonicContainer}>
        {mnemonic.split(' ').map((word, index) => (
          <View key={index} style={styles.mnemonicBlock}>
            <Text style={styles.mnemonicWord}>{word}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    width: '90%',
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  mnemonicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mnemonicBlock: {
    backgroundColor: '#333333',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  mnemonicWord: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default PasswordView;
