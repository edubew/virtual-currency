/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
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
        <span>
          <BiSearch className="search__icon" />
        </span>
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
          <div key={coin.id}>
            <Link to={`/coins/${coin.id}`}>
              <div id="list">
                <article className="card">
                  <img src={coin.image} alt="coin" />
                  <p>{coin.market_cap_rank}</p>
                  <p>{coin.name}</p>
                  <p>{coin.market_cap}</p>
                </article>
              </div>
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
    margin: 2% 30%;

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
      color: black;
      background-color: transparent;
    }
  }

  .coin__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: 1rem 2rem;

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      margin: 1rem;
      gap: 0;
    }

    article {
      padding: 1rem;
      box-shadow: 0 3px 8px black;
      text-decoration: none;
      list-style: none;

      @media screen and (max-width: 600px) {
        box-shadow: none;
        border: 1px solid black;
      }

      img {
        width: 14rem;
        margin: 0 15%;

        @media screen and (max-width: 600px) {
          width: 6rem;
          margin: 0 10%;
        }
      }

      p {
        color: #fff;
        font-size: 1.4rem;
        text-align: center;

        @media screen and (max-width: 600px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
