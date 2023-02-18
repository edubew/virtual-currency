import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';

const App = () => {
  const coinsObj = useSelector((state) => state.coins.coinsState);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Coins coins={coinsObj} />} />
        <Route path="coins/:id" element={<CoinDetails />} />
      </Routes>
    </>
  );
};

export default App;
