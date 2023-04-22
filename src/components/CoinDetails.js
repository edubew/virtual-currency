import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TiMicrophone } from 'react-icons/ti';
import { IoIosSettings } from 'react-icons/io';
import { AiOutlineLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCoinDetails } from '../redux/reducers/coinsReducers';
import image from '../assets/image.jpg';

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
      <div className="navbar">
        <Link to="/">
          <AiOutlineLeft className="arrow__left" />
        </Link>
        <h1 className="brand__name">
          <Link to="/">Crypto Space</Link>
        </h1>
        <div className="nav__icons">
          <TiMicrophone className="icon" />
          <IoIosSettings className="icon" />
        </div>
      </div>
      {coins === [] ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="header__container">
            <img src={image} alt="coin" />
            <div>
              <h3>{coins.name}</h3>
              <p>{coins.symbol}</p>
            </div>
          </div>

          <div className="table__details">
            <p>Crypto Details</p>
            <table key={coins.id}>
              <tbody>
                <tr>
                  <td>Rank</td>
                  <td>{coins.market_cap_rank}</td>
                </tr>
                <tr>
                  <td>Genesis Date</td>
                  <td>{coins.genesis_date}</td>
                </tr>
                <tr>
                  <td>Votes Up Percentage</td>
                  <td>
                    {coins.sentiment_votes_up_percentage}
                    %
                  </td>
                </tr>
                <tr>
                  <td>Votes Down Percentage</td>
                  <td>
                    {coins.sentiment_votes_down_percentage}
                    %
                  </td>
                </tr>
                <tr>
                  <td>Portfolio Users</td>
                  <td>{coins.watchlist_portfolio_users}</td>
                </tr>
                <tr>
                  <td>Public Interest Score</td>
                  <td>{coins.public_interest_score}</td>
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
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #001b48;
  padding: 1.1rem;

  .brand__name a {
    color: #fff;
    font-size: 1.5rem;

    @media screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
  }

  .arrow__left {
    font-weight: bolder;
    font-size: 1.5rem;
  }

  .nav__icons {
    display: flex;
    font-size: 1.5rem;
    gap: 0.8rem;

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
}
  .header__container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: right;
    padding: 2rem;

    img {
      width: 20rem;

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
      padding: 0 1rem;
      font-size: 1.5rem;
      font-weight: bolder;
      background-color: #0047ab;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      font-weight: 500;

      @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
      }
    }

    td {
      padding: 1.2rem;
    }

    tr {
      padding: 8px;
      font-size: 1.2rem;
      background-color: #26619c;
    }

    tr:nth-child(even) {
      background-color: #0047ab;
    }
  }
`;
