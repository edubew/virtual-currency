import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinDetails } from '../redux/reducers/coinsReducers';

const CoinDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.dataState);

  const { id, name } = params;

  useEffect(() => {
    dispatch(getCoinDetails(id));
  }, [id, dispatch]);

  return (
    <div>
      <div>
        <img src={coins.image.thumb} alt="coin" />
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
