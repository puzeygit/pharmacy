import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Heart from 'react-heart';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Registration from './Registration';
import Authorization from './Authorization';
import Order from './Order';
import LK from './LK';
import ProductPage from './ProductPage';

export default function App({ user, data }) {
  const [currUser, setCurrUser] = useState(user || {});
  const logOutHandler = () => {
    fetch('/api/logout')
      .then(() => setCurrUser({}));
  };

  const [searchInput, setSearchInputValue] = useState('');
  const searchHandler = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <>
      <Navbar currUser={currUser} logOutHandler={logOutHandler} searchHandler={searchHandler} />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage data={data} searchInput={searchInput}/>} />
          <Route path="/page/registration" element={<Registration setCurrUser={setCurrUser} />} />
          <Route path="/page/authorization" element={<Authorization setCurrUser={setCurrUser} />} />
          <Route path="/page/personalacc" element={<LK currUser={currUser} setCurrUser={setCurrUser} />} />
          <Route path="/page/order" element={<Order currUser={currUser} data={data} />} />
          <Route path="/page/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </>
  );
}
