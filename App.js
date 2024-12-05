import React from 'react';
import "react-native-get-random-values";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Splash from './Splash';
import ImportWallet from './ImportWallet';
import Balance from './components/Balance';
import BalanceOfCoins from './components/BalanceOfCoins';
import Portfolio from './components/Portfolio';
import Access from './components/Access';
import CryptoTracker from './components/CryptoTracker/CryptoTracker';
import Bip39CreateWallet from './Bip39CreateWallet';
import SolanaAddress from './components/SolanaBlockchain/SolanaAddress';
import SolanaDeposit from './components/SolanaBlockchain/SolanaDeposit';
import SolanaWithdraw from './components/SolanaBlockchain/SolanaWithdraw';
import PasswordView from './PasswordView';
import PrivacyPolicy from './components/PrivacyPolicy';
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
        <Stack.Screen name="Bip39CreateWallet" component={Bip39CreateWallet} />
        <Stack.Screen name="SolanaAddress" component={SolanaAddress} />
        <Stack.Screen name="SolanaDeposit" component={SolanaDeposit} />
        <Stack.Screen name="SolanaWithdraw" component={SolanaWithdraw} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="BalanceOfCoins" component={BalanceOfCoins} />
        <Stack.Screen name="CryptoTracker" component={CryptoTracker} />
        <Stack.Screen name="PasswordView" component={PasswordView} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Config" component={Config} />
      </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}