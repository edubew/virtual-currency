import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const coins = useSelector((state) => state.coins.coinsState);

  return (
    <Header>
      <div>
        {coins.length === 0
          ? (
            <Link to="/">
              <MdOutlineArrowBackIosNew />
            </Link>
          ) : null }

        <div>
          <h1>CRYPTO SPACE</h1>
        </div>
      </div>
    </Header>
  );
};

const Header = styled.header`
display: flex;
justify-content: space-between;
background-color: #001b48;
padding: 2rem;

.search__bar {
  input {
    padding: 12px;
    border-radius: 20px;
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid gray;
  }
}
`;

export default Navigation;
