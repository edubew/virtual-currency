import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinDetails } from '../redux/reducers/coinsReducers';

const CoinDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.dataState);

  const { id } = params;

  useEffect(() => {
    dispatch(getCoinDetails(id));
  }, [id, dispatch]);

  return (
  // <div>
  //   <div>
  //     <a href="/details" onChange={(e) => setData(e.target.value)}>
  //       <img src={coins.image} alt="coin" />
  //     </a>
  //     <div>
  //       <h3>{coins.name}</h3>
  //       <p>{coins.symbol}</p>
  //       <h4>{coins.market_cap}</h4>
  //     </div>
  //   </div>

    //   <div>
    //     <div>
    //       <p>
    //         {name}
    //         {' '}
    //         Breakdown
    //       </p>
    //     </div>
    //     <table>
    //       <tbody>
    //         {coins.map((coin) => (
    //           <tr key={coin.id}>
    //             <td>{coin.market_cap}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div>
      {coins === [] ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img
            src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
            alt="coin"
          />
          <h3>{coins.name}</h3>
          <p>{coins.symbol}</p>
        </div>
      )}

      {/* <div>
        <div>
          <p>
            {name}
            {' '}
            Breakdown
          </p>
        </div>
        <table>
          <tbody>
              <tr key={coin.id}>
                <td>{coin.market_cap}</td>
                   </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default CoinDetails;
