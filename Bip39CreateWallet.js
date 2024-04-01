import React from 'react';
import 'react-native-get-random-values';
import SolanaWallet from './SolanaBlockchain/SolanaWallet';

const Bip39CreateWallet = () => {
  SolanaWallet();
};

export default Bip39CreateWallet;



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