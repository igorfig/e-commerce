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

export function AppRoutes({ handleChangeBackgroundColor, banners }) {
	const [isSearchBarOnFocus, setIsSearchBarOnFocus] = useState(false);
  const handleSearchBarFocus = (status) => setIsSearchBarOnFocus(status);
 	const url = 'PROCESSADOR AMD RYZEN 5 5500, 6-CORE, 12-THREADS, 3.6GHZ (4.2GHZ TURBO), CACHE 19MB, AM4, 100-100000457BOX'.toLowerCase();
  const urlFormatted = url.replace(/[ ,]+/g, "-")
	return (
		<Router>
			<Header isSearchBarOnFocus={isSearchBarOnFocus} handleSearchBarFocus={handleSearchBarFocus}/>
			<Routes>
				<Route exact path="/" element={<Home handleChangeBackgroundColor={handleChangeBackgroundColor} isSearchBarOnFocus={isSearchBarOnFocus} banners={banners}/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/carrinho" element={<Cart />} />
        <Route exact path={`/${urlFormatted}`} element={<Product />} />
      	<Route exact path={`/dashboard`} element={<Dashboard />} />
      	<Route exact path={'/processadores'} element={<ProductCategory />} />
			</Routes>
			<Footer />
		</Router>
	)
}