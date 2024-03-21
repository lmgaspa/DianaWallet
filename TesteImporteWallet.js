import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";

const ImportWallet = ({ navigation }) => {
  const fixedWords = [
    "mixed", "thunder", "proof", "learn", "surprise",
    "slight", "gospel", "enable", "cactus", "nest",
    "alone", "mask"
  ];

  const [secretPhrase, setSecretPhrase] = useState(Array(12).fill(''));
  const [validationError, setValidationError] = useState(false);
  const [address, setAddress] = useState('');

  const handleChangeText = (text, index) => {
    const newSecretPhrase = [...secretPhrase];
    newSecretPhrase[index] = text;
    setSecretPhrase(newSecretPhrase);
  };

  const handleValidation = () => {
    const mnemonic = secretPhrase.join(' ');
    try {
      const seed = bip39.mnemonicToSeedSync(mnemonic, "");
      const seedSlice = Uint8Array.prototype.slice.call(seed, 0, 32);
      const keypair = Keypair.fromSeed(seedSlice);
      console.log("Public Key:", keypair.publicKey.toBase58());
      console.log("Secret Key:", keypair.secretKey.toString('hex'));
      setAddress(keypair.publicKey.toBase58()); // Calculating and setting the address
      setValidationError(false);
      console.log(seed);
      console.log("Address:", keypair.publicKey.toBase58());
      navigation.navigate('Access', { address: keypair.publicKey.toBase58()}); // Navigate to teste.js
    } catch (error) {
      console.error('Error in importing the Keypair:', error);
      setValidationError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RESTORE WALLET</Text>
      <Text style={styles.text}>Type your secret phrase to restore your existing wallet</Text>
      {fixedWords.map((word, index) => (
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
        <Text style={styles.buttonText}>Validate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282c34',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#61dafb',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#61dafb',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  addressText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 20,
  },
});

export default ImportWallet;


/*



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ImportWallet() {
  const navigation = useNavigation();
  const [validationError, setValidationError] = useState(false);
  const [secretPhrase, setSecretPhrase] = useState(Array(12).fill('')); // State to store secret phrase

  const handleValidation = () => {
    // Perform validation here (for demonstration purposes, assuming validation fails)
    const walletAddress = validateSecretPhrase(secretPhrase);
    if (walletAddress) {
      navigation.navigate('Access', { address: walletAddress });
    } else {
      setValidationError(true);
    }
  };

  // Function to validate secret phrase and return wallet address if valid
  const validateSecretPhrase = (phraseArray) => {
    // Perform your validation logic here
    // For demonstration purposes, let's assume any non-empty phrase is valid and return a dummy address
    const isValid = phraseArray.some(word => word.trim() === '');
    if (!isValid) {
      // Dummy wallet address for demonstration
      return 'dummyWalletAddress';
    }
    return null;
  };

  const handleChangeText = (text, index) => {
    const newPhrase = [...secretPhrase];
    newPhrase[index] = text;
    setSecretPhrase(newPhrase);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RESTORE WALLET</Text>
      <Text style={styles.text}>Type your secret phrase to restore your existing wallet</Text>
      {secretPhrase.map((word, index) => (
        <TextInput
          key={index.toString()}
          style={styles.input}
          placeholder={`Word ${index + 1}`}
          placeholderTextColor="#FFFFFF80"
          onChangeText={(text) => handleChangeText(text, index)}
        />
      ))}
      {validationError && (
        <Text style={styles.errorText}>The key is wrong</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleValidation}>
        <Text style={styles.buttonText}>Validate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333333',
    width: '80%',
    height: 40,
    marginBottom: 10,
    color: '#FFFFFF',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

*/