import React, { createContext, useState, useEffect } from 'react';

export const CoinsPriceContext = createContext({});

export function CoinsPriceProvider({ children, onLoad }) {
  const [btcPrice, setBtcPrice] = useState(0);
  const [btcPreviousPrice, setBtcPreviousPrice] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);
  const [ethPreviousPrice, setEthPreviousPrice] = useState(0);
  const [bnbPrice, setBnbPrice] = useState(0);
  const [bnbPreviousPrice, setBnbPreviousPrice] = useState(0);
  const [solPrice, setSolPrice] = useState(0);
  const [solPreviousPrice, setSolPreviousPrice] = useState(0);
  const [xrpPrice, setXrpPrice] = useState(0);
  const [xrpPreviousPrice, setXrpPreviousPrice] = useState(0);
  const [adaPrice, setAdaPrice] = useState(0);
  const [adaPreviousPrice, setAdaPreviousPrice] = useState(0);
  const [ltcPrice, setLtcPrice] = useState(0);
  const [ltcPreviousPrice, setLtcPreviousPrice] = useState(0);
  const [dogePrice, setDogePrice] = useState(0);
  const [dogePreviousPrice, setDogePreviousPrice] = useState(0);
  const [shibPrice, setShibPrice] = useState(0);
  const [shibPreviousPrice, setShibPreviousPrice] = useState(0);
  const [flokiPrice, setFlokiPrice] = useState(0);
  const [flokiPreviousPrice, setFlokiPreviousPrice] = useState(0);
  const [pepePrice, setPepePrice] = useState(0);
  const [pepePreviousPrice, setPepePreviousPrice] = useState(0);
  const [dotPrice, setDotPrice] = useState(0);
  const [dotPreviousPrice, setDotPreviousPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const [btcResponse, ethResponse, bnbResponse, solResponse, xrpResponse, adaResponse, ltcResponse, dogeResponse, shibResponse,
        flokiResponse, pepeResponse, dotResponse] = await Promise.all([
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=SHIBUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=FLOKIUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=PEPEUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT'),
      ]);
  
      const [btcData, ethData, bnbData, solData, xrpData, adaData, ltcData, dogeData, shibData, flokiData, pepeData, dotData] = await Promise.all([
        btcResponse.json(),
        ethResponse.json(),
        bnbResponse.json(),
        solResponse.json(),
        xrpResponse.json(),
        adaResponse.json(),
        ltcResponse.json(),
        dogeResponse.json(),
        shibResponse.json(),
        flokiResponse.json(),
        pepeResponse.json(),
        dotResponse.json(),
      ]);
  
      const btcNewPrice = parseFloat(btcData.price).toFixed(2);
      const btcPriceString = btcNewPrice.toString();
      const btcFormattedPrice = btcPriceString.length > 6 ? btcPriceString.slice(0, btcPriceString.length - 6) + "," + btcPriceString.slice(btcPriceString.length - 6) : btcPriceString;
  
      const ethNewPrice = parseFloat(ethData.price).toFixed(2);
      const ethPriceString = ethNewPrice.toString();
      const ethFormattedPrice = ethPriceString.length > 6 ? ethPriceString.slice(0, ethPriceString.length - 6) + "," + ethPriceString.slice(ethPriceString.length - 6) : ethPriceString;

      const bnbNewPrice = parseFloat(bnbData.price).toFixed(2);
      const solNewPrice = parseFloat(solData.price).toFixed(2);
      const xrpNewPrice = parseFloat(xrpData.price).toFixed(2);
      const adaNewPrice = parseFloat(adaData.price).toFixed(2);
      const ltcNewPrice = parseFloat(ltcData.price).toFixed(2);
      const dogeNewPrice = parseFloat(dogeData.price).toFixed(2);
      const shibNewPrice = parseFloat(shibData.price).toFixed(8);
      const flokiNewPrice = parseFloat(flokiData.price).toFixed(8);
      const pepeNewPrice = parseFloat(pepeData.price).toFixed(8);
      const dotNewPrice = parseFloat(dotData.price).toFixed(2);
  
      setBtcPreviousPrice(btcPrice);
      setBtcPrice(btcFormattedPrice);
      
      setEthPreviousPrice(ethPrice);
      setEthPrice(ethFormattedPrice);
      
      setBnbPreviousPrice(bnbPrice);
      setBnbPrice(bnbNewPrice);

      setSolPreviousPrice(solPrice);
      setSolPrice(solNewPrice);

      setXrpPreviousPrice(xrpPrice);
      setXrpPrice(xrpNewPrice);
      
      setAdaPreviousPrice(adaPrice);
      setAdaPrice(adaNewPrice);
      
      setLtcPreviousPrice(ltcPrice);
      setLtcPrice(ltcNewPrice);

      setDogePreviousPrice(dogePrice);
      setDogePrice(dogeNewPrice);

      setShibPreviousPrice(shibPrice);
      setShibPrice(shibNewPrice);

      setFlokiPreviousPrice(flokiPrice);
      setFlokiPrice(flokiNewPrice);
 
      setPepePreviousPrice(pepePrice);
      setPepePrice(pepeNewPrice);
 
      setDotPreviousPrice(dotPrice);
      setDotPrice(dotNewPrice);

      // Indicate loading is complete
      onLoad();
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CoinsPriceContext.Provider
      value={{
        btcPrice,
        ethPrice,
        bnbPrice,
        solPrice,
        xrpPrice,
        adaPrice,
        ltcPrice,
        dogePrice,
        shibPrice,
        flokiPrice,
        pepePrice,
        dotPrice
      }}
    >
      {children}
    </CoinsPriceContext.Provider>
  );
}