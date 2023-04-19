import React from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

const SearchBox = ({ search, setSearch }) => (
  <form>
    <FiSearch />
    <input
      className="search__input"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder="Search Crypto by name..."
      maxLength={50}
    />
  </form>
);

SearchBox.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.string.isRequired,
};

export default SearchBox;
