import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "../Components/Header";
import { settingCoinObject } from '../Components/Functions/settingCoinObject';
import List from '../Components/Dashboard/List';
import Info from '../Components/CoinPage/Info';
import LineChart from '../Components/CoinPage/LineChart';

const API_KEY = 'CG-3j2yzJKLe6VoXJKGBTB9x4mY';

const Coinpage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [marketData, setMarketData] = useState(null); // Single market data state
  const [chartData, setChartData] = useState({});

  const days = 300; // Number of days for the market chart

  const gettingDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  useEffect(() => {
    if (id) {
      // API call for coin data
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`, {
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': API_KEY,
          },
        })
        .then((response) => {
          console.log("Coin Data>>>", response.data);
          settingCoinObject(setCoinData, response.data);
          setError(null);
        })
        .catch((error) => {
          console.error("Error>>>", error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });

      // API call for market data
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=3`, {
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': API_KEY,
          },
        })
        .then((response) => {
          console.log("Market Data>>>", response.data);
          setMarketData(response.data.prices);
        })
        .catch((error) => {
          console.error("Error fetching market data>>>", error);
        });
    }
  }, [id]);

  useEffect(() => {
    // Update chart data when marketData is available
    if (marketData) {
      setChartData({
        labels: marketData.map((data) => gettingDate(data[0])),
        datasets: [
          {
            data: marketData.map((data) => data[1]),
            borderWidth: 1,
            fill: true,
            backgroundColor: "rgba(58, 128, 233,0.1)",
            tension: 0.15,
            borderColor: "#3a80e9",
            pointRadius: 0,
            yAxisID: "crypto1",
          },
        ],
      });
    }
  }, [marketData]);

  if (loading) {
    return (
      <div>
        <Header />
        <p>Loading coin data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <p>Error loading coin data: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {/* Conditionally render List and Info only if coinData is available */}
      {coinData ? (
        <div className="row-flex">
          <List coin={coinData} />
          <Info title={coinData.name} desc={coinData.desc} /> 
        </div>
      ) : (
        <p>No coin data available.</p>
      )}

      {/* Conditionally render the chart when market data is available */}
      {marketData ? (
        <div className="grey-wrapper">
          <LineChart chartData={chartData} multiAxis={false} />
        </div>
      ) : (
        <p>Loading market data...</p>
      )}
    </div>
  );
};

export default Coinpage;
