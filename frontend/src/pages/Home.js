import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Carousel } from '../components/Carousel'
import { ProductsBoard } from '../components/ProductsBoard'
import { Footer } from '../components/Footer';

export function Home({ banners, handleChangeBackgroundColor, isSearchBarOnFocus }) {
	const { isLoggedIn } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		isLoggedIn && navigate('/');
	}, [isLoggedIn])
	return (
		<>
			<Carousel banners={banners} changeBackgroundColor={handleChangeBackgroundColor} applyOpacity={isSearchBarOnFocus ? true : false}/>
			<ProductsBoard applyOpacity={isSearchBarOnFocus ? true : false}/>
		</>
	)
}