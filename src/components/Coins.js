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

  // Search feature
  const filteredCoins = search.trim()
    ? [...coins].filter((coin) => coin.name.toLowerCase().includes(search))
    : [...coins];

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

      {filteredCoins.length > 0 && (
        <Link to={`/coins/${filteredCoins[0].id}`}>
          <article className="filter__item">
            <img src={filteredCoins[0].image} alt="coin" />
            <div className="cotents">
              <p>{filteredCoins[0].name}</p>
              <p>
                $
                {filteredCoins[0].current_price}
              </p>
            </div>
          </article>
        </Link>
      )}

      <h1 className="title">Crypto Data</h1>
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
                  <p className="percent">
                    <FiArrowDownLeft />
                    {coin.price_change_percentage_24h}
                    %
                  </p>
                ) : (
                  <p className="percent">
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

  .filter__item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 2rem 1rem;
    font-size: 1.4rem;
    background-color: #015c92;

    img {
      width: 8rem;
    }
  }

  .title {
    font-size: 1.3rem;
    padding: 0.6rem 0.2rem;
    color: #f6bd03;
  }

  .coin__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.2rem;
    margin: 2% 0;

    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    article {
      padding: 1rem;
      margin: 0.8rem;
      box-shadow: -4px -4px 5px #010a3d, 5px 5px 5px #0a171a;
      border-radius: 0.8rem;

      @media screen and (max-width: 600px) {
        padding: 1rem;
      }

      img {
        width: 5rem;

        @media screen and (max-width: 600px) {
          width: 6rem;
          margin: 0 10%;
        }
      }

      .percent {
        color: #f6bd03;
        font-size: 1rem;
      }

      p {
        color: #fff;
        font-size: 1.2rem;
        text-align: right;
        padding: 0 0.8rem;

        @media screen and (max-width: 600px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
