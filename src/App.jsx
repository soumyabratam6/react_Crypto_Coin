/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CryptoTable from "./components/CryptoTable";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => {
        //console.log(response.data); // Log the fetched data to the console
        setCryptoData(response.data); // Set the fetched data to state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="container mt-2">
      <h1 className="text-center">CoinGecko Table Data</h1>
      <CryptoTable cryptos={cryptoData} />
    </div>
  );
};

export default App;
