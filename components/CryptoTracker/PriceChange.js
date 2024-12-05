import React, { createContext, useState, useEffect } from "react";

const PriceChangeContext = createContext({
  btcPriceChange: 0,
  ethPriceChange: 0,
  bnbPriceChange: 0,
  solPriceChange: 0,
  adaPriceChange: 0,
  xrpPriceChange: 0,
  ltcPriceChange: 0,
  dogePriceChange: 0,
  shibPriceChange: 0,
  flokiPriceChange: 0,
  pepePriceChange: 0,
  dotPriceChange: 0,
});

const PriceChangeProvider = ({ children, onLoad }) => {
  const [btcPriceChange, setBtcPriceChange] = useState(0);
  const [ethPriceChange, setEthPriceChange] = useState(0);
  const [bnbPriceChange, setBnbPriceChange] = useState(0);
  const [solPriceChange, setSolPriceChange] = useState(0);
  const [adaPriceChange, setAdaPriceChange] = useState(0);
  const [xrpPriceChange, setXrpPriceChange] = useState(0);
  const [ltcPriceChange, setLtcPriceChange] = useState(0);
  const [dogePriceChange, setDogePriceChange] = useState(0);
  const [shibPriceChange, setShibPriceChange] = useState(0);
  const [flokiPriceChange, setFlokiPriceChange] = useState(0);
  const [pepePriceChange, setPepePriceChange] = useState(0);
  const [dotPriceChange, setDotPriceChange] = useState(0);

  useEffect(() => {
    const symbols = ["BTC", "ETH", "BNB", "SOL", "ADA", "XRP", "LTC", "DOGE", "SHIB", 'FLOKI', 'PEPE', "DOT"];
    const fetchData = async () => {
      const responses = await Promise.all(
        symbols.map((symbol) =>
          fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`).then(
            (response) => response.json()
          )
        )
      );

      setBtcPriceChange(responses[0].priceChangePercent);
      setEthPriceChange(responses[1].priceChangePercent);
      setBnbPriceChange(responses[2].priceChangePercent);
      setSolPriceChange(responses[3].priceChangePercent);
      setAdaPriceChange(responses[4].priceChangePercent);
      setXrpPriceChange(responses[5].priceChangePercent);
      setLtcPriceChange(responses[6].priceChangePercent);
      setDogePriceChange(responses[7].priceChangePercent);
      setShibPriceChange(responses[8].priceChangePercent);
      setFlokiPriceChange(responses[9].priceChangePercent);
      setPepePriceChange(responses[10].priceChangePercent);
      setDotPriceChange(responses[11].priceChangePercent);

      // Indicate loading is complete
      onLoad();
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <PriceChangeContext.Provider
      value={{
        btcPriceChange,
        ethPriceChange,
        bnbPriceChange,
        solPriceChange,
        adaPriceChange,
        xrpPriceChange,
        ltcPriceChange,
        dogePriceChange,
        shibPriceChange,
        flokiPriceChange,
        pepePriceChange,
        dotPriceChange
      }}
    >
      {children}
    </PriceChangeContext.Provider>
  );
};

export { PriceChangeContext, PriceChangeProvider };