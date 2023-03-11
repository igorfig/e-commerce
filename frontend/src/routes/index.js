import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Cart } from '../pages/Cart';
import { Product } from '../pages/Product';
import { Dashboard } from '../pages/Dashboard';
import { ProductCategory } from '../pages/ProductCategory';
import {FavoriteProducts} from '../pages/FavoriteProducts';

import { useProducts } from '../hooks/useProducts';

export function AppRoutes({ handleChangeBackgroundColor, banners }) {
	const [isSearchBarOnFocus, setIsSearchBarOnFocus] = useState(false);
  const handleSearchBarFocus = (status) => setIsSearchBarOnFocus(status);
	return (
		<Router>
			<Header isSearchBarOnFocus={isSearchBarOnFocus} handleSearchBarFocus={handleSearchBarFocus}/>
			<Routes>
				<Route exact path="/" element={<Home handleChangeBackgroundColor={handleChangeBackgroundColor} isSearchBarOnFocus={isSearchBarOnFocus} banners={banners}/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/carrinho" element={<Cart />} />
        <Route path={`/produto/:product`} element={<Product />} />
      	<Route exact path={`/dashboard`} element={<Dashboard />} />
      	<Route exact path={`/:optionalPath?/:category`} element={<ProductCategory />} />
      	<Route exact path={`/favoritos`} element={<FavoriteProducts />}/>
			</Routes>
			<Footer />
		</Router>
	)
}