import React from 'react';
import { Screen } from 'react-native-screens';
import "react-native-get-random-values";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Splash from './Splash';
import ImportWallet from './ImportWallet';
import Balance from './Components/Balance'
import BalanceofCoins from './Components/BalanceofCoins';
import Portfolio from './Components/Portfolio';
import Access from './Components/Access';

import CryptoTracker from './CryptoTracker/CryptoTracker';
import BitcoinAddress from './BitcoinBlockchain/BitcoinAddress'
import Bip39CreateWallet from './Bip39CreateWallet';
import SolanaAddress from './SolanaBlockchain/SolanaAddress';
import DianaAddress from './DianaBlockchain/DianaAddress';
import DianaDeposit from './DianaBlockchain/DianaDeposit';
import DianaWithdraw from './DianaBlockchain/DianaWithdraw';

import SolanaDeposit from './SolanaBlockchain/SolanaDeposit';
import SolanaWithdraw from './SolanaBlockchain/SolanaWithdraw';

import PasswordView from './PasswordView';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Config from './Config';

import { Buffer } from "buffer";
global.Buffer = Buffer;

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={{ colors: { background: 'black' }}}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, gestureEnabled: false, animationEnabled: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImportWallet" component={ImportWallet} />
        <Stack.Screen name="Access" component={Access} />
        <Stack.Screen name="Balance" component={Balance} />
        <Stack.Screen name="BitcoinAddress" component={BitcoinAddress} />
        <Stack.Screen name="Bip39CreateWallet" component={Bip39CreateWallet} />
        <Stack.Screen name="SolanaAddress" component={SolanaAddress} />
        <Stack.Screen name="DianaAddress" component={DianaAddress} />
        <Stack.Screen name="DianaDeposit" component={DianaDeposit} />
        <Stack.Screen name="DianaWithdraw" component={DianaWithdraw} />
        <Stack.Screen name="SolanaDeposit" component={SolanaDeposit} />
        <Stack.Screen name="SolanaWithdraw" component={SolanaWithdraw} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="BalanceofCoins" component={BalanceofCoins} />
        <Stack.Screen name="CryptoTracker" component={CryptoTracker} />
        <Stack.Screen name="PasswordView" component={PasswordView} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Config" component={Config} />
      </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
