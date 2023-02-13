import { useState } from 'react';
import { GlobalStyles } from './global';
import { api } from './services/api';
import { AppRoutes } from './routes';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#0C448A');

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
      <AppRoutes handleChangeBackgroundColor={handleChangeBackgroundColor} banners={banners}/>
    </>
  );
}

export default App;
