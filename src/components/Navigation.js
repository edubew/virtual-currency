import React from 'react';
import styled from 'styled-components';

const Navigation = () => (
  <Header>
    <div className="logo">
      <h1>CRYPTO SPACE</h1>
    </div>
    <div className="search__bar">
      <input type="text" placeholder="search coin..." />
    </div>
  </Header>
);

const Header = styled.header`
display: flex;
justify-content: space-between;
background-color: #001b48;
padding: 2rem 3rem;

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
