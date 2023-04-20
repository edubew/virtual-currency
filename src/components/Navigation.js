import React from 'react';
import styled from 'styled-components';
import { TiMicrophone } from 'react-icons/ti';
import { IoIosSettings } from 'react-icons/io';
import SearchBox from './SearchBox';
// import { Link } from 'react-router-dom';
// import { MdOutlineArrowBackIosNew } from 'react-icons/md';
// import { useSelector } from 'react-redux';

const Navigation = () => (
// const coins = useSelector((state) => state.coins.coinsState);
  <Header>
    <div>
      <div>
        <h1>CRYPTO SPACE</h1>
        <SearchBox />
        <TiMicrophone />
        <IoIosSettings />
      </div>
    </div>
  </Header>
);
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
