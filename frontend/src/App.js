import { useState, useEffect, useCallback } from 'react';

import { GlobalStyles } from './global';
import { api } from './services/api';

import { Header } from './components/Header'
import { Carousel } from './components/Carousel'
import { ProductsBoard } from './components/ProductsBoard'
import { Footer } from './components/Footer'

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
      <Header isSearchBarOnFocus={isSearchBarOnFocus} handleSearchBarFocus={handleSearchBarFocus}/>
      <Carousel banners={banners} changeBackgroundColor={handleChangeBackgroundColor} applyOpacity={isSearchBarOnFocus ? true : false}/>
      <ProductsBoard applyOpacity={isSearchBarOnFocus ? true : false}/>
      <Footer /> 
    </>
  );
}

export default App;
