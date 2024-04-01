import React, { useState, useEffect } from 'react';
import 'react-native-get-random-values';
import { View, Text, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { generateMnemonic } from 'bip39';
import { Keypair } from '@solana/web3.js';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SolanaWallet = () => {
  const [seed, setSeed] = useState('');
  const [mnemonics, setMnemonics] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    generateSeed();
  }, []);

  const generateSeed = async () => {
    try {
      const savedAddress = await AsyncStorage.getItem('solanaAddress');
      const savedWallet = await AsyncStorage.getItem('solanaWallet');

      if (savedAddress && savedWallet) {
        console.log('Dados já existem localmente:');
        console.log('Endereço recuperado:', savedAddress);
        console.log('Carteira recuperada:', savedWallet);

        setAddress(savedAddress);
        setMnemonics(savedWallet);
        navigateToAccessPage(savedAddress, savedWallet);
      } else {
        const seed = uuidv4();
        setSeed(seed);

        const mnemonic = generateMnemonic();
        setMnemonics(mnemonic);

        const keypair = Keypair.generate();
        const generatedAddress = keypair.publicKey.toString();
        setAddress(generatedAddress);

        console.log('Solana Address: ' + generatedAddress);
        console.log('Solana Mnemonic: ' + mnemonic);
        console.log('Solana Seed: ' + seed);

        saveDataLocally(generatedAddress, mnemonic);
        navigateToAccessPage(generatedAddress, mnemonic);
      }
    } catch (error) {
      console.error('Erro ao gerar ou recuperar dados:', error);
    }
  };

  const saveDataLocally = async (generatedAddress, mnemonic) => {
    try {
      await AsyncStorage.setItem('solanaAddress', generatedAddress);
      await AsyncStorage.setItem('solanaWallet', mnemonic);
      console.log('Dados salvos localmente com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const navigateToAccessPage = (address, mnemonic) => {
    navigation.navigate('Access', { address, mnemonic });
  };
}

export default SolanaWallet;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
  },
});
