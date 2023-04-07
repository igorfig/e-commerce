import { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Cart } from '../pages/Cart';
import { Product } from '../pages/Product';
import { ProductCategory } from '../pages/ProductCategory';
import { FavoriteProducts } from '../pages/FavoriteProducts';
import { Orders } from '../pages/Orders'
import { UserProvider } from '../providers/userProvider';
import { useProducts } from '../hooks/useProducts';

export function AppRoutes({ handleChangeBackgroundColor, banners }) {
	const [isSearchBarOnFocus, setIsSearchBarOnFocus] = useState(false);
	const token = useRef(Cookies.get('token'))

  const handleSearchBarFocus = (status) => setIsSearchBarOnFocus(status);
	return (
		<Router>
			<UserProvider>
				<Header isSearchBarOnFocus={isSearchBarOnFocus} handleSearchBarFocus={handleSearchBarFocus}/>
				<Routes>
					<Route exact path="/" element={<Home handleChangeBackgroundColor={handleChangeBackgroundColor} isSearchBarOnFocus={isSearchBarOnFocus} banners={banners}/>} />
	        <Route exact path="/login" element={token.current ? <Home handleChangeBackgroundColor={handleChangeBackgroundColor} isSearchBarOnFocus={isSearchBarOnFocus} banners={banners}/> : <Login />} />
	        <Route exact path="/cadastro" element={token.current ? <Home handleChangeBackgroundColor={handleChangeBackgroundColor} isSearchBarOnFocus={isSearchBarOnFocus} banners={banners}/> : <Register />} />
	        <Route exact path="/carrinho" element={<Cart />} />
	        <Route path={`/produto/:product`} element={<Product />} />
	      	<Route exact path={`/:optionalPath?/:category`} element={<ProductCategory />} />
	      	<Route exact path={`/favoritos`} element={<FavoriteProducts />}/>
	      	<Route exact path={`/pedidos`} element={<Orders />} />
				</Routes>
				<Footer />
			</UserProvider>
		</Router>
	)
}