import React from 'react';
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { Tooltip } from '@mui/material';
import './styles.css';  // Ensure you have the appropriate styles
import { convertNumber } from '../../Functions/convertNumber';
import Search from '../Search';
import { Link } from 'react-router-dom';

const List = ({ coin }) => {
  const isNegative = coin.price_change_percentage_24h < 0;

  return (
    <>
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
      <td className="info-flex">
        <img
          src={coin.image}
          className="coin-image"
          alt={`${coin.name} logo`}
          />
      </td>
      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      <td className="chip-flex">
      
        {isNegative ? (
          <>
          <Tooltip title="Current Price">
            <div className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            </Tooltip>
            <div className="chip-icon red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </>
        ) : (
          <>
          <Tooltip title="Current Price">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            </Tooltip>
            <div className="chip-icon td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </>
        )}
       
      </td>
      <td className="coin-price-container">
        {isNegative ? (
            <h3 className="coin-price-red">
            ${coin.current_price.toLocaleString()}
          </h3>
        ) : (
          <h3 className="coin-price">
            ${coin.current_price.toLocaleString()}
          </h3>
        )}
      </td>
      <td className="market-cap dp ">
        <p>${coin.market_cap.toLocaleString()}</p>
      </td>
      <td className="market-cap mb-disp ">
        <p>${convertNumber(coin.market_cap)}</p>
      </td>
      <td className="total-volume td-disp">
        <p>${coin.total_volume.toLocaleString()}</p>
      </td>
    </tr>
              </Link>
    </>
  );
};

export default List;
