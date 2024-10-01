import React from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import "./style.css";
import {Link} from 'react-router-dom'; 

const Grid = ({ coin }) => {
  // Determine if the price change is negative or positive
  const isNegative = coin.price_change_percentage_24h < 0;

  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${isNegative ? "red-glow" : "green-glow"}`}>
      <div className="info-flex">
        <img
          src={coin.image}
          className="coin-image"
          alt={`${coin.name} logo`}
        />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
          <br></br>
        </div>
      </div>
      {isNegative ? (
        <div className="chip-flex">
          <div className="price-chip red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="chip-icon red">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="chip-icon">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      )}
      <div className="info-container">
        {isNegative ? (
          <h3 className="coin-price-red">$ {coin.current_price.toLocaleString()}</h3>
        ):(
          <h3 className="coin-price ">$ {coin.current_price.toLocaleString()}</h3>
        )}
        <p className="total_volume">Total Volume: $ {coin.total_volume.toLocaleString()}</p>
        <p className="total_volume">Market Cap: $ {coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
    </Link>
  );
};

export default Grid;