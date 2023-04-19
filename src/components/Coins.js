/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { coinsEffect } from '../redux/reducers/coinsReducers';

const Coins = () => {
  const [search, setSearch] = useState('');
  const coins = useSelector((state) => state.coins.coinsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinsEffect());
  }, [dispatch]);

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Div>
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          value={search}
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="coin__grid">
        {filteredCoins.map((coin) => (
          <div key={coin.id} className="grid__layout">
            <Link to={`/coins/${coin.id}`}>
              <article>
                <img src={coin.image} alt="coin" />
                <p>{coin.market_cap_rank}</p>
                <p>{coin.name}</p>
                <p>{coin.market_cap}</p>
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
    </Div>
  );
};

export default Coins;

const Div = styled.div`
  .search__container {
    margin: 2% 15%;

    .search__icon {
      font-size: 2rem;
      color: black;
    }

    .search__input {
      padding: 0.8rem;
      outline: none;
      width: 70%;
      border-radius: 2rem;
      border: 1px solid black;
      color: white;
      background-color: transparent;
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
