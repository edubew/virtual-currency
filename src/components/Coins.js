/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi';
import { TiMicrophone } from 'react-icons/ti';
import { IoIosSettings } from 'react-icons/io';
import { coinsEffect } from '../redux/reducers/coinsReducers';
import SearchBox from './SearchBox';

const Coins = () => {
  const [search, setSearch] = useState('');
  const coins = useSelector((state) => state.coins.coinsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinsEffect());
  }, [dispatch]);

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Section>
      <div className="navbar">
        <h1 className="brand__name">
          <Link to="/">Crypto Space</Link>
        </h1>
        <SearchBox search={search} setSearch={setSearch} />
        <div className="nav__icons">
          <TiMicrophone />
          <IoIosSettings />
        </div>
      </div>

      <div className="coin__grid">
        {filteredCoins.map((coin) => (
          <div key={coin.id} className="grid__layout">
            <Link to={`/coins/${coin.id}`}>
              <article>
                <img src={coin.image} alt="coin" />
                <p>{coin.name}</p>
                <p>
                  $
                  {coin.current_price}
                </p>
                {coin.price_change_percentage_24h < 0 ? (
                  <p className="red">
                    <FiArrowDownLeft />
                    {coin.price_change_percentage_24h}
                    %
                  </p>
                ) : (
                  <p className="green">
                    <FiArrowUpRight />
                    {coin.price_change_percentage_24h}
                    %
                  </p>
                )}
              </article>
            </Link>
          </div>
        ))}
        {search === '' && filteredCoins.length === 0 && <p>Please wait...</p>}

        {search !== '' && filteredCoins.length === 0 && (
          <p>
            No Result Found for &apos;
            {search}
            &apos;
          </p>
        )}
      </div>
    </Section>
  );
};

export default Coins;

const Section = styled.section`
  .navbar {
    display: flex;
    justify-content: space-between;
    // gap: 1.3px;
    align-items: center;
    flex-wrap: wrap;
    background-color: #001b48;
    padding: 1.1rem;

    .brand__name a {
      color: #fff;

      @media screen and (max-width: 600px) {
        font-size: 1.1rem;
      }
    }

    .nav__icons {
      display: flex;
      font-size: 1.1rem;
      gap: 0.8rem;

      @media screen and (max-width: 600px) {
        font-size: 0.8rem;
      }
    }
  }

  .coin__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: 2% 5%;

    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
    }

    article {
      padding: 1rem;
      margin: 0.8rem;
      box-shadow: 0 2px 8px rgb(30, 27, 223);
      border-radius: 0.8rem;

      @media screen and (max-width: 600px) {
        padding: 1rem;
        margin: 0;
        box-shadow: none;
        border-radius: 0%;
      }

      img {
        width: 6rem;

        @media screen and (max-width: 600px) {
          width: 6rem;
          margin: 0 10%;
        }
      }

      .red {
        color: red;
        font-size: 1rem;
        font-weight: bolder;
      }

      .green {
        color: green;
        font-size: 1rem;
      }

      p {
        color: #fff;
        font-size: 1.4rem;
        text-align: right;
        padding: 0 0.8rem;

        @media screen and (max-width: 600px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
