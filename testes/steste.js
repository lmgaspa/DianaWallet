/*

// solanaTeste.js
import { Connection, Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

const SolanaTeste = async () => {
  const privateKeyBase58 = '5c7RUekXiNM6Rb1ucJoAtr4ozKFsRumgwgE95eJUG7g6Nu7bu8MibPS6V7RJq3DzzG7RyGSoxbQsLfyZtgziM4GH';
  try {
    // Decodificar a chave privada de Base58 para bytes
    const privateKeyBytes = bs58.decode(privateKeyBase58);

    // Criar uma chave privada Solana a partir dos bytes
    const keypair = Keypair.fromSecretKey(privateKeyBytes);
    const publicKey = keypair.publicKey.toString();

    // Imprimir a chave pública no console
    console.log('Public Key:', publicKey);

    // Conectar à mainnet da Solana
    const connection = new Connection('https://api.mainnet-beta.solana.com');

    // Consultar o saldo da conta associada à chave privada
    const balance = await connection.getBalance(keypair.publicKey);

    // Imprimir o saldo no console
    console.log('Balance:', balance);
    console.log('Public Key:', publicKey);

    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};

export default SolanaTeste;
*/