import { useState, useEffect, createContext } from 'react';
import { api } from '../services/api';
import Storage from '../utils/storage';

export const ProductsContext = createContext([]);
const urlRegex = /[ ,]+/g;

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState(() => Storage.get('@products'));
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



	const handleLikeProduct = async (id) => {
	  setProducts(prevState => prevState.map(product => {
	    if (product.id === id) {
	      	return {
	        	...product,
	        	liked: !product.liked
	      	};
	    }
	    return product;
	  }));

	  const product = products.find(product => product.id === id);
	  await api.patch(`/products/liked/${id}?liked=${!product.liked}`);	
	};

	return (
		<ProductsContext.Provider value={{products, handleLikeProduct}}>
			{ children }
		</ProductsContext.Provider>
	)
}