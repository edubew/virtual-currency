import axios from 'axios';

const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

export const fetchCoins = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const fetchCoinsDetails = async (id) => {
  const url = 'https://api.coingecko.com/api/v3/coins';
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};
