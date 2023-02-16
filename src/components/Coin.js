// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { BiSearch } from "react-icons/bi";
// import { GET_COINS, GET_COIN_DETAILS } from "../redux/actions/coinActions";
// const Coin = () => {
//   const url =
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
//   const dispatch = useDispatch();
//   const [coins, setCoins] = useState([]);
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchCoins = async () => {
//       try {
//         const response = await axios.get(url);
//         setCoins(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };
//     fetchCoins();
//   }, [url]);
//   const handleCoinClick = async (id) => {
//     try {
//       const response = await axios.get(`${url}/${id}/market_charts&limit=20`);
//       setData(response.data);
//       dispatch({ type: GET_COIN_DETAILS, payload: response.markets_charts });
//     } catch (error) {
//       console.error(`Error fetching coin details for id ${id}:`, error);
//     }
//   };
//   const filteredCoins = coins.filter((coin) => {
//     return coin.name.toLowerCase().includes(search.toLowerCase());
//   });
//   const coinList = filteredCoins.map((coin) => (
//     <div key={coin.id} onClick={() => handleCoinClick(coin.id)}>
//       <article>
//         <img src={coin.image} alt="coin" />
//         <p>{coin.market_cap_rank}</p>
//         <p>{coin.name}</p>
//         <p>{coin.market_cap}</p>
//       </article>
//     </div>
//   ));
//   return (
//     <div>
//       <div className="search">
//         <BiSearch className="search-icon" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="search-input"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//       {error ? (
//         <p>{error.message}</p>
//       ) : loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="coin-list">{coinList}</div>
//       )}
//     </div>
//   );
// };
// export default Coin;
