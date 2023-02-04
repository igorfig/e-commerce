import { useState } from 'react';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { GlobalStyles } from './global';
import { api } from './services/api';

import { Header } from './components/Header';
import { Footer } from './components/Footer';


import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';

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

  const url = 'PROCESSADOR AMD RYZEN 5 5500, 6-CORE, 12-THREADS, 3.6GHZ (4.2GHZ TURBO), CACHE 19MB, AM4, 100-100000457BOX'.toLowerCase();
  const urlFormatted = url.replace(/[ ,]+/g, "-")

  return (
    <>
      <GlobalStyles backgroundColor={backgroundColor}/>
       <Router>
        <Header isSearchBarOnFocus={isSearchBarOnFocus} handleSearchBarFocus={handleSearchBarFocus}/>
        <Routes> 
            <Route exact path="/" element={<Home handleChangeBackgroundColor={handleChangeBackgroundColor} isSearchBarOnFocus={isSearchBarOnFocus} banners={banners}/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/carrinho" element={<Cart />} />
            <Route exact path={`/${urlFormatted}`} element={<Product />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
