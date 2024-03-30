import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PasswordView = () => {
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
      <Text style={styles.title}>RESTORE WALLET</Text>
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
    backgroundColor: '#222222',
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