import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCoinDetails } from '../redux/reducers/coinsReducers';
import currency from '../assets/currency.jpg';

const CoinDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.dataState);

  const { id } = params;

  useEffect(() => {
    dispatch(getCoinDetails(id));
  }, [id, dispatch]);

  return (
    <Div>
      {coins === [] ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="header__container">
            <img src={currency} alt="coin" />
            <div>
              <h3>{coins.name}</h3>
              <p>{coins.symbol}</p>
            </div>
          </div>

          <div className="table__details">
            <p>Coin Details</p>
            <table key={coins.id}>
              <tbody>
                <tr>
                  <td>Market Cap Rank</td>
                  <td>{coins.market_cap_rank}</td>
                </tr>
                <tr>
                  <td>Coin Id</td>
                  <td>{coins.id}</td>
                </tr>
                <tr>
                  <td>Block Time in Minutes</td>
                  <td>{coins.block_time_in_minutes}</td>
                </tr>
                <tr>
                  <td>Hashing Algorithm</td>
                  <td>{coins.hashing_algorithm}</td>
                </tr>
                <tr>
                  <td>Genesis Date</td>
                  <td>{coins.genesis_date}</td>
                </tr>
                <tr>
                  <td>Liquidity Score</td>
                  <td>{coins.liquidity_score}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Div>
  );
};

export default CoinDetails;

const Div = styled.div`
  .header__container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
      width: 24rem;

      @media screen and (max-width: 600px) {
        width: 12rem;
      }
      
    }
    h3 {
      font-size: 1.8rem;
      font-weight: bolder;
    }
  }

  .table__details {
    p {
      text-align: center;
      font-size: 1.5rem;
      font-weight: bolder;
    }

    table {
      border-colapse: collapse;
      width: 80%;
      margin: 0 10%;

      @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
      }
    }

    td {
      padding: 8px;
    }

    tr {
      padding: 8px;
      font-size: 1.2rem;
      background-color: #4167ad;
    }

    tr:nth-child(even) {
      background-color: #3d60a2;
    }
  }
`;
