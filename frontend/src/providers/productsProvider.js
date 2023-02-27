import { useState, useEffect, createContext } from 'react';
import { api } from '../services/api';

export const ProductsContext = createContext([]);
const urlRegex = /[ ,]+/g;

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const apiResponse = await api.get('/products');
				const jsonData = apiResponse.data;

				setProducts(jsonData);
			} catch(err) {
				console.error(err.message);
			}
		})()
	}, [])

	return (
		<ProductsContext.Provider value={products}>
			{ children }
		</ProductsContext.Provider>
	)
}