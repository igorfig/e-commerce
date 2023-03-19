import { useState, useEffect, createContext } from 'react';
import { api } from '../services/api';
import Storage from '../utils/storage';
import Cookies from 'js-cookie';

export const ProductsContext = createContext([]);
const urlRegex = /[ ,]+/g;

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState(() => Storage.get('@products'));
	const [selectedProduct, setSelectedProduct] = useState({});
	const [favorites, setFavorites] = useState(() => {
		const favoritesSaved = Cookies.get('favorites');
		if(favoritesSaved) {
			const favoritesParsed = JSON.parse(favoritesSaved);
			return favoritesParsed;
		}
	});

	useEffect(() => {
		const favoritesSaved = Cookies.get('favorites');
		if(favoritesSaved) {
			const favoritesParsed = JSON.parse(favoritesSaved);
			setFavorites(favoritesParsed);
		}
	}, [])

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

	useEffect(() => {
		(async () => {
			try {	
				const token = Cookies.get('token');
				if(token) {
					const user = JSON.parse(Cookies.get('user'));
					const apiResponse = await api.get(`/user/favorites/${user.id}`);
					const data = apiResponse.data;

					setFavorites(data)
					Cookies.set('favorites', JSON.stringify(data));

					console.log(data);
				}

			} catch(err) {
				console.error(err.message);
			}
		})()
	}, [])

	const handleLikeProduct = async (product) => {
		try {
			const token = Cookies.get('token');

			if(token) {
				const user = JSON.parse(Cookies.get('user'));	

				await api.post(`/user/favorites/${user.id}?username=${user.username}`, product);
				const apiResponse = await api.get(`/user/favorites/${user.id}`);
				if(apiResponse.status === 200){
					const data = apiResponse.data;
					setFavorites(data);
					Cookies.set('favorites', JSON.stringify(data))
				}
			}
		
		} catch(err) {
			if(err.response.status === 409) handleUnlikeProduct(product);
		}
	};

	const handleUnlikeProduct = async (product) => {
		try {
			const token = Cookies.get('token');

			if(token) {
				const user = JSON.parse(Cookies.get('user'));
				await api.delete(`/user/favorites/${user.id}?id=${product.id}`)
				setFavorites(favorites.filter(favorite => favorite.product.id !== product.id));
			}
		} catch(err) {
			console.error(err.message);
		}
	}

	return (
		<ProductsContext.Provider value={{products, favorites, handleLikeProduct, handleUnlikeProduct}}>
			{ children }
		</ProductsContext.Provider>
	)
}