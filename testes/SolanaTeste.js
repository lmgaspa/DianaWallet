/*

const bip32 = require('bip32');
const bip39 = require('bip39');
const { PublicKey } = require('@solana/web3.js');

async function SolanaTeste() {
    const mnemonic = "Sua frase mnemônica aqui"; // Substitua pelo seu próprio mnemonic
    const root = bip32.fromSeed(await bip39.mnemonicToSeed(mnemonic));

    const numAddressesToCheck = 10; // Defina quantos endereços deseja verificar

    for (let index = 0; index < numAddressesToCheck; index++) {
        const path = `m/44'/501'/${index}'/0'`;
        const publicKey = PublicKey.fromBuffer(root.derivePath(path).publicKey);
        const address = publicKey.toBase58();
        
        console.log(`Endereço Solana derivado de ${path}: ${address}`);
    }
}

export default SolanaTeste;


/*

const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');
const bip39 = require('bip39');

function SolanaTeste() {
    const generateSolanaAddress = (mnemonic) => {
        try {
            // Gera a semente (seed) a partir da frase mnemônica
            const seed = bip39.mnemonicToSeedSync(mnemonic, "");
            const seedSlice = Uint8Array.prototype.slice.call(seed, 0, 32);
            
            // Cria um par de chaves (Keypair) a partir da seed
            const keypair = Keypair.fromSeed(seedSlice);
            
            // Obtém a chave privada em base58
            const privateKeyBase58 = bs58.encode(keypair.secretKey);

            // Obtém o endereço Solana (chave pública)
            const publicKeyBase58 = keypair.publicKey.toBase58();

            return { publicKey: publicKeyBase58, privateKey: privateKeyBase58 };
        } catch (error) {
            console.error('Error in generating Solana address:', error);
            throw error;
        }
    };

    // Sua frase mnemônica
    const mnemonic = "mixed thunder proof learn surprise slight gospel enable cactus nest alone mask";

    // Gera o endereço Solana e a chave privada a partir da frase mnemônica
    const { publicKey, privateKey } = generateSolanaAddress(mnemonic);

    console.log("Endereço Solana (PublicKey):", publicKey);
    console.log("Chave privada (PrivateKey) base58:", privateKey);
}

export default SolanaTeste;




/* USING BIP39

const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');
const bip39 = require('bip39');

function SolanaTeste() {
    const generateSolanaAddress = (mnemonic) => {
        try {
            // Gera a semente (seed) a partir da frase mnemônica
            const seed = bip39.mnemonicToSeedSync(mnemonic, "");
            const seedSlice = Uint8Array.prototype.slice.call(seed, 0, 32);
            
            // Cria um par de chaves (Keypair) a partir da seed
            const keypair = Keypair.fromSeed(seedSlice);
            
            // Obtém a chave privada em base58
            const privateKeyBase58 = bs58.encode(keypair.secretKey);

            // Obtém o endereço Solana (chave pública)
            const publicKeyBase58 = keypair.publicKey.toBase58();

            return { publicKey: publicKeyBase58, privateKey: privateKeyBase58 };
        } catch (error) {
            console.error('Error in generating Solana address:', error);
            throw error;
        }
    };

    // Sua frase mnemônica
    const mnemonic = "mixed thunder proof learn surprise slight gospel enable cactus nest alone mask";

    // Gera o endereço Solana e a chave privada a partir da frase mnemônica
    const { publicKey, privateKey } = generateSolanaAddress(mnemonic);

    console.log("Endereço Solana (PublicKey):", publicKey);
    console.log("Chave privada (PrivateKey) base58:", privateKey);
}

export default SolanaTeste;

/* AQUI DECODIFICA

import { PublicKey } from '@solana/web3.js';
import bs58 from 'bs58';

function SolanaTeste() {
    const privateKey = '5c7RUekXiNM6Rb1ucJoAtr4ozKFsRumgwgE95eJUG7g6Nu7bu8MibPS6V7RJq3DzzG7RyGSoxbQsLfyZtgziM4GH'; // substitua pela sua chave privada

    // Decodifica a chave privada de Base58
    const decodedPrivateKey = bs58.decode(privateKey);

    // A chave privada é um array de bytes de 64 bytes, então dividimos em duas partes de 32 bytes
    const privateKeyBytes = decodedPrivateKey.slice(0, 32); // chave privada
    const publicKeyBytes = decodedPrivateKey.slice(32); // chave pública

    // Converte a chave pública para PublicKey
    const publicKey = new PublicKey(publicKeyBytes);

    console.log("Chave Pública (Base58):", publicKey.toBase58());
}

export default SolanaTeste;


/*

import base58 from 'bs58'; // Certifique-se de instalar a biblioteca bs58: npm install bs58

function SolanaTeste () {
    
const is_valid_solana_address = (address) => {
    try {
        const decoded_bytes = base58.decode(address);
        // Verifica se o comprimento dos bytes decodificados é igual a 32 bytes
        if (decoded_bytes.length !== 32) {
            return false;
        }
        // Outras verificações podem ser feitas, dependendo da estrutura específica do endereço Solana
        // Por exemplo, você pode verificar o prefixo do endereço para garantir que ele seja válido para a rede Solana
        return true;
    } catch (error) {
        return false;
    }
};

const solana_address = "AKaJEbYh4nknfg657NBMF6STz2VXe3qFNYsRkrL5cg3j";
console.log(is_valid_solana_address(solana_address) ? "Endereço Solana válido!" : "Endereço Solana inválido!");

}

export default SolanaTeste
/*

/*

import { useEffect, useState } from 'react';
import base58 from 'bs58'; // Certifique-se de instalar a biblioteca bs58: npm install bs58

function SolanaTeste () {

const is_valid_ed25519_pubkey = (pubkey_str) => {
    try {
        const decoded_bytes = base58.decode(pubkey_str);
        // Verifica se o comprimento dos bytes decodificados é de 32 bytes
        if (decoded_bytes.length !== 32) {
            return false;
        }
        // Verifica se o primeiro byte está dentro do intervalo válido (0-255)
        if (decoded_bytes[0] > 127) {
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
};

const pubkey = "6TpUj7dE3sQnHQWASKt4ktndzrZVGddiEH84SFB3J4ja";
console.log(is_valid_ed25519_pubkey(pubkey) ? "Chave pública do Solana válida!" : "Chave pública do Solana inválida!");
}

export default SolanaTeste;

*/