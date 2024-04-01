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
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainTitle: {
      color: 'white',
      fontSize: 38,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      backgroundColor: 'white',
      padding: 12,
      margin: 10,
      borderRadius: 15,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
    },
  });
  