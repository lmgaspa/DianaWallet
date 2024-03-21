import React, { useState, useEffect } from 'react';
import 'react-native-get-random-values';
import { View, Text, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { generateMnemonic } from 'bip39';
import { Keypair } from '@solana/web3.js';
import { useNavigation } from '@react-navigation/native';

const SolanaWallet = () => {
  const [seed, setSeed] = useState('');
  const [mnemonics, setMnemonics] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    generateSeed();
  }, []);

  useEffect(() => {
    if (address) {
      goToAccessPage();
    }
  }, [address]);

  const generateSeed = () => {
    const seed = uuidv4();
    setSeed(seed);

    const mnemonic = generateMnemonic();
    setMnemonics(mnemonic);

    const keypair = Keypair.generate();
    const generatedAddress = keypair.publicKey.toString();
    setAddress(generatedAddress);
    console.log(generatedAddress)
    console.log(mnemonic)
    console.log(seed)
  };

  const goToAccessPage = () => {
    navigation.navigate('Access', { address }); // Passando o endereço como parâmetro para a página 'Access'
  };
}

export default SolanaWallet;

/* PAST CODE

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Seed:</Text>
      <Text style={styles.text}>{seed}</Text>
      <Text style={styles.text}>Your Mnemonics:</Text>
      <Text style={styles.text}>{mnemonics}</Text>
      <Text style={styles.text}>Your Solana Address:</Text>
      <Text style={styles.text}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
});



/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', // Definindo o fundo preto
  },
  text: {
    color: 'white', // Definindo a cor do texto como branco
    textAlign: 'center', // Centralizando o texto
    marginBottom: 10, // Espaçamento inferior
  },
});

<Text style={styles.text}>Your Seed:</Text>
<Text style={styles.text}>{seed}</Text>
<Text style={styles.text}>Your Mnemonics:</Text>
<Text style={styles.text}>{mnemonics}</Text>
<Text style={styles.text}>Your Solana Address:</Text>
<Text style={styles.text}>{address}</Text>

*/