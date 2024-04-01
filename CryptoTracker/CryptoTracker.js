import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CoinsPriceContext, CoinsPriceProvider } from './PriceCoins';
import { PriceChangeContext, PriceChangeProvider } from './PriceChange';
import btc from '../assets/images/btc.png'
import eth from '../assets/images/eth.png'
import bnb from '../assets/images/bnb.png'
import sol from '../assets/images/sol.png'
import ada from '../assets/images/ada.png'
import xrp from '../assets/images/xrp.png'
import ltc from '../assets/images/ltc.png'
import doge from '../assets/images/doge.png'
import shib from '../assets/images/shib.png'
import floki from '../assets/images/floki.png'
import pepe from '../assets/images/pepe.png'
import dot from '../assets/images/dot.png'
import { LinearGradient } from 'expo-linear-gradient';

const coinImages = [btc, eth, bnb, sol, ada, xrp, ltc, doge, shib, floki, pepe, dot];

const coinNames = ['BTC', 'ETH', 'BNB', 'SOL', 'ADA', 'XRP', 'LTC', 'DOGE', 'SHIB', 'FLOKI', 'PEPE', 'DOT'];

const coinSubtitles = ['Bitcoin', 'Ethereum', 'Binance Coin', 'Solana', 'Cardano', 'XRP', 'Litecoin', 'Dogecoin', 'Shib', 'Floki',
'Pepe', 'Polkadot'];

function CryptoTracker() {
  
  const coinsPrice = useContext(CoinsPriceContext);
  const priceChange = useContext(PriceChangeContext);

  const getPriceChangeColor = priceChange => {
    return priceChange >= 0 ? '#9EA93F' : 'red';
  };

  const getBackgroundGradient = priceChange => {
    const leftColor = '#172121';
    const rightColor = priceChange >= 0 ? '#315C2B' : '#580c1f';

    const colors = Array.from({ length: 2 }, () => leftColor).concat(rightColor);

    return (
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.backgroundGradient}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <Text style={styles.marketTitle}>Market</Text>
        {coinNames.map((coin, index) => (
          <View key={index} style={styles.coinRow}>
            {getBackgroundGradient(priceChange[coin.toLowerCase() + "PriceChange"])}
            <View style={styles.coinColumn}>
              <Image source={coinImages[index]} style={styles.coinImage} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{coin}</Text>
                <Text style={styles.subtitle}>{coinSubtitles[index]}</Text>
                <Text style={styles.priceText}>${coinsPrice[coin.toLowerCase() + "Price"]}</Text>
              </View>
            </View>
            <View style={styles.priceChangeColumn}>
              <View style={[styles.tableColumn2]}>
                <Text style={[styles.quantityofCoin]}></Text>
                <Text style={[styles.changeText, { color: getPriceChangeColor(priceChange[coin.toLowerCase() + "PriceChange"]) }]}>
                  {priceChange[coin.toLowerCase() + "PriceChange"] > 0 ? '+' : ''}{(priceChange[coin.toLowerCase() + "PriceChange"] * 1).toFixed(2)}%
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  marketTitle: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 20,
    textAlign: 'center',
  },
  coinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    height: 80,
    width: '100%',
    overflow: 'hidden',
  },
  coinColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  priceChangeColumn: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  priceText: {
    color: 'white',
  },
  coinImage: {
    width: 30,
    height: 30,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 2,
  },
  subtitle: {
    fontStyle: 'italic',
    color: 'white',
    paddingBottom: 2,
  },
  tableColumn2: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  quantityofCoin: {
    color: 'white',
    paddingBottom: 5,
  },
  changeText: {
    color: 'white',
    fontWeight: 'bold'
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default () => (
  <CoinsPriceProvider>
    <PriceChangeProvider>
      <CryptoTracker />
    </PriceChangeProvider>
  </CoinsPriceProvider>
);

/* 
<Text style={styles.subtitle}>{coin}</Text>
 <Text style={styles.tableHeaderText}>Name</Text>
          </View>
          <View style={[styles.tableColumn, { alignItems: 'flex-end' }]}>
            <Text style={styles.tableHeaderText}>Price</Text>
          </View>
          <View style={[styles.tableColumn, { alignItems: 'flex-end' }]}>
            <Text style={styles.tableHeaderText}>24h%</Text>
*/