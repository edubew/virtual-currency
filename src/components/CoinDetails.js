import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinDetails } from '../redux/reducers/coinsReducers';

const CoinDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const coins = useSelector((state) => state.coins.dataState);

  const { id, name } = params;

  useEffect(() => {
    dispatch(getCoinDetails(id));
  }, [id, dispatch]);

  const handleCoinClick = async (id) => {
    try {
      const response = await axios.get(`${url}/${id}/market_charts&limit=20`);
      setData(response.data);
      dispatch({ type: GET_COIN_DETAILS, payload: response.markets_charts });
    } catch (error) {
      console.error(`Error fetching coin details for id ${id}:`, error);
    }
  };

  return (
    <div>
      <div>
        <a href="/" onClick={() => handleCoinClick(coins.id)}>
          <img src={coins.image.thumb} alt="coin" />
        </a>
        <div>
          <h3>{coins.name}</h3>
          <p>{coins.symbol}</p>
          <h4>{coins.market_cap.usd}</h4>
        </div>
      </div>

      <div>
        <div>
          <p>
            {name}
            {' '}
            Breakdown
          </p>
        </div>
        <table>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.market_cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinDetails;
