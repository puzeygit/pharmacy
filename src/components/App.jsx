import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Heart from 'react-heart';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Registration from './Registration';
import Authorization from './Authorization';

export default function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page/registration" element={<Registration />} />
        <Route path="/page/authorization" element={<Authorization/>}/>
      </Routes>
    </div>
  </>  
  );
}
