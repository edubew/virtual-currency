/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { coinsEffect } from '../redux/reducers/coinsReducers';

const Coins = () => {
  const [search, setSearch] = useState('');
  const coins = useSelector((state) => state.coins.coins);
  console.log('coins', coins);
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(coinsEffect());
    // console.log(coinsEffect());
  }, [dispatch]);

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <div className="search__container">
        <span>
          <BiSearch />
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

      <div>
        {filteredCoins.map((coin) => (
          <div key={coin.id}>
            <article>
              <img src={coin.image} alt="coin" />
              <p>{coin.market_cap_rank}</p>
              <p>{coin.name}</p>
              <p>{coin.market_cap}</p>
            </article>
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
    </>
  );
};
// export default Coins;
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { BiSearch } from 'react-icons/bi';
// import { coinsEffect } from '../redux/reducers/coinsReducers';
// // import Loading from './Loading';

// const Coins = () => {
//   const [search, setSearch] = useState('');
//   const coins = useSelector((state) => state.coins.coinsState);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(coinsEffect());
//   }, [dispatch]);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredCoins = coins.filter((coin) => (
//     coin.name.toLowerCase().includes(search.toLowerCase())
//   ));

//   {
//     search === '' && filteredCoins.length === 0 && <p>Please wait...</p>;
//   }

//   {
//     search !== '' && filteredCoins.length === 0 && (
//     <p>
//       No Result Found for &apos;
//       {search}
//       &apos;
//     </p>
//     );
//   }

// if (coins.isLoding || coins.isEror) {
//   return <Loading />;
// }

//   return (
//     <header className="home-container">
//       <div className="home-serch">
//         <input
//           type="text"
//           value={search}
//           placeholder="Search Coins..."
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="home-list">
//         {filteredCoins.length === 0 ? (
//           <h1>No related coins found!</h1>
//         ) : (
//           filteredCoins.map((coin) => (
//             <div key={coin.id} className="container-card">
//               <img src={coin.image} alt={coin.name} />
//               <div className="container-card-info">
//                 <h1>{coin.name}</h1>
//                 <p>
//                   Market Cap: $
//                   {coin.market_cap.toFixed(2)}
//                 </p>
//               </div>
//               <NavLink to={`/details/${coin.id}`}>
//                 <BiSearch className="link" />
//               </NavLink>
//             </div>
//           ))
//         )}
//       </div>
//     </header>
//   );
// };

export default Coins;
