import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Diana Wallet</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Bip39CreateWallet')}>
          <Text style={styles.buttonText}>Create a Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ImportWallet')}>
          <Text style={styles.buttonText}>I Have a Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainContainer: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainTitle: {
      color: 'white',
      fontSize: 24,
      marginBottom: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  