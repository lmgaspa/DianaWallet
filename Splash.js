import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';
import { generateMnemonic } from 'bip39';
import { Keypair } from '@solana/web3.js';

export default function Splash() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Espera 4 segundos na tela de splash
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedAddress = await AsyncStorage.getItem('solanaAddress');
        const savedWallet = await AsyncStorage.getItem('solanaWallet');

        if (savedAddress && savedWallet) {
          console.log('Endereço recuperado:', savedAddress);
          console.log('Carteira recuperada:', savedWallet);
          navigateToAccessPage(savedAddress, savedWallet);
        } else {
          console.log('Nenhum dado salvo localmente, navegando para Home.');
          navigateToHomePage();
        }
      } catch (error) {
        console.error('Erro ao carregar ou gerar dados:', error);
      }
    };

    if (!loading) {
      loadData();
    }
  }, [loading]);

  const generateAndSaveDataLocally = async () => {
    const seed = uuidv4();
    const mnemonic = generateMnemonic();
    const keypair = Keypair.generate();
    const generatedAddress = keypair.publicKey.toString();

    console.log('Solana Address: ' + generatedAddress); // Log generated address
    console.log('Solana Seed: ' + seed); // Log seed

    await saveDataLocally(generatedAddress, mnemonic);
    navigateToAccessPage(generatedAddress, mnemonic);
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
    console.log('Navegando para Access com Address:', address); // Log para verificar a navegação
    console.log('Navegando para Access com Mnemonic:', mnemonic); // Log para verificar a navegação
    navigation.navigate('Access', { address, mnemonic });
  };

  const navigateToHomePage = () => {
    console.log('Navegando para Home'); // Log para verificar a navegação
    navigation.navigate('Home');
  };

  return (
    <>
      {loading && (
        <View style={styles.splashContainer}>
          <Text style={styles.splashText}>Diana Wallet</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 24,
  },
});
