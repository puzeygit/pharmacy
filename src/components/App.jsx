import React,  { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Heart from 'react-heart';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Registration from './Registration';
import Authorization from './Authorization';
import Order from './Order';
import LK from './LK';


export default function App({user, data}) {
  const [currUser, setCurrUser] = useState(user || {});
  const logOutHandler = () => {
    fetch('/api/logout')
      .then(() => setCurrUser({}));
  };
  return (
    <>
    <Navbar currUser={currUser} logOutHandler={logOutHandler}/>
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage data={data}/>} />
        <Route path="/page/registration" element={<Registration setCurrUser={setCurrUser} />} />
        <Route path="/page/authorization" element={<Authorization setCurrUser={setCurrUser}/>}/>
        <Route path='/page/personalacc' element={<LK currUser={currUser} setCurrUser={setCurrUser}/>}/>
        <Route path="/page/order" element={<Order data={data}/>}/>
      </Routes>
    </div>
  </>  
  );
}
