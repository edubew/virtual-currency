import React from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBox = ({ search, setSearch }) => (
  <Form>
    <FiSearch />
    <input
      className="search__input"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder="Search crypto by name"
      maxLength={50}
    />
  </Form>
);

SearchBox.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBox;

const Form = styled.form`
display: flex;
align-items: center;
flex-wrap: noWrap;
gap: 0;

.search__input {
  width: 100%;
  background: transparent;
  padding: 0 0.5rem;
  color: #fff;
  border-style: none solid solid none;
  border-color: #fff;
  border-width: 1px;
  border-radius: 0.3rem;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ffffff7f;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
}
`;
