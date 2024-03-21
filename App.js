import React from 'react';
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
import SolanaWallet from './SolanaBlockchain/SolanaWallet';
import SolanaAddress from './SolanaBlockchain/SolanaAddress';
import SolanaDeposit from './SolanaBlockchain/SolanaDeposit';
import SolanaWithdraw from './SolanaBlockchain/SolanaWithdraw';

import { Buffer } from "buffer";
global.Buffer = Buffer;

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, gestureEnabled: false, animationEnabled: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImportWallet" component={ImportWallet} />
        <Stack.Screen name="Access" component={Access} />
        <Stack.Screen name="Balance" component={Balance} />
        <Stack.Screen name="SolanaWallet" component={SolanaWallet} />
        <Stack.Screen name="SolanaAddress" component={SolanaAddress} />
        <Stack.Screen name="SolanaDeposit" component={SolanaDeposit} />
        <Stack.Screen name="SolanaWithdraw" component={SolanaWithdraw} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="BalanceofCoins" component={BalanceofCoins} />
        <Stack.Screen name="CryptoTracker" component={CryptoTracker} />
      </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
