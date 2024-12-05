import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import BackButton from './components/BackButton';

const ImportWallet = ({ navigation }) => {
  const [secretPhrase, setSecretPhrase] = useState(Array(12).fill(''));
  const [validationError, setValidationError] = useState(false);
  const [address, setAddress] = useState('');

  const handleChangeText = (text, index) => {
    const newSecretPhrase = [...secretPhrase];
    newSecretPhrase[index] = text.toLowerCase(); // Convertendo a palavra para minúsculas
    setSecretPhrase(newSecretPhrase);
  };

  const handleValidation = () => {
    const mnemonic = secretPhrase.join(' ');
    const mnemonicWords = mnemonic.split(' ');

    // Verifica se todas as palavras são preenchidas
    const isAllWordsFilled = mnemonicWords.every(word => word.trim() !== '');

    if (!isAllWordsFilled || !bip39.validateMnemonic(mnemonic)) {
      setValidationError(true);
      return;
    }

    try {
      const seed = bip39.mnemonicToSeedSync(mnemonic, "");
      const seedSlice = Uint8Array.prototype.slice.call(seed, 0, 32);
      const keypair = Keypair.fromSeed(seedSlice);
    
      console.log("Secret Key (Base58):", keypair.secretKey.toString('base58')); // Exibe a SecretKey em base58
      setAddress(keypair.publicKey.toBase58());
      setValidationError(false);
      console.log("Address:", keypair.publicKey.toBase58());
      navigation.navigate('Access', { address: keypair.publicKey.toBase58()});
    } catch (error) {
      console.error('Error in importing the Keypair:', error);
      setValidationError(true);
    }
  };

  const handleBackPress = () => {
    navigation.goBack(); // Função para voltar para a tela anterior
};

  return (
    <View style={styles.container}>
      <BackButton onPress={handleBackPress}/>
      <Text style={styles.title}>RESTORE WALLET</Text>
      <Text style={styles.text}>Type your secret phrase to restore your existing wallet</Text>
      {secretPhrase.map((word, index) => (
        <TextInput
          key={index.toString()}
          style={styles.input}
          placeholder={`Word ${index + 1}`}
          placeholderTextColor="#FFFFFF80"
          onChangeText={(text) => handleChangeText(text, index)}
          value={secretPhrase[index]}
        />
      ))}
      {validationError && (
        <Text style={styles.errorText}>The phrase is incorrect</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleValidation}>
        <Text style={styles.buttonText}>RESTORE WALLET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: '#333333',
    padding: 10,
    marginBottom: 10,
    color: '#FFFFFF',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ImportWallet;