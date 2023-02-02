import { useState } from 'react';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { GlobalStyles } from './global';
import { api } from './services/api';

import { Header } from './components/Header'
import { Footer } from './components/Footer'


import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Cart } from './pages/Cart'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#0C448A');
  const [isSearchBarOnFocus, setIsSearchBarOnFocus] = useState(false);
  const handleSearchBarFocus = (status) => setIsSearchBarOnFocus(status);

  const banners = [
      {
        fileName: 'banner_img.jpg',
        backgroundColor: '#0C448A',
      },

      {
        fileName: 'banner2_img.jpg',
        backgroundColor: '#002138'
      },

      {
        fileName: 'banner3_img.jpg',
        backgroundColor: '#161A34'
      }
  ];


  const handleChangeBackgroundColor = (index) => setBackgroundColor(banners[index].backgroundColor)


  return (
    <>
      <GlobalStyles backgroundColor={backgroundColor}/>
       <Router>
        <Header isSearchBarOnFocus={isSearchBarOnFocus} handleSearchBarFocus={handleSearchBarFocus}/>
        <Routes> 
            <Route exact path="/" element={<Home handleChangeBackgroundColor={handleChangeBackgroundColor} isSearchBarOnFocus={isSearchBarOnFocus} banners={banners}/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/carrinho" element={<Cart />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
