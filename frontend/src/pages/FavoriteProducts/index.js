import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	EmptyFavorites,
	NavigateTo,
	ProductCard,
	ProductDetails,
	ProductPrice,
	Actions
} from './styles';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import cartImg from '../../assets/label/cart.svg'
import { currencyFormatter } from '../../utils/currencyFormatter';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import emptyFavoritesImg from '../../assets/layout/emptyFavorites.svg'

export function FavoriteProducts() {
	const { products, favorites, handleUnlikeProduct } = useProducts();
	const { handleAddToCart } = useCart();
	const navigate = useNavigate();
	const token = Cookies.get('token');

	if(!token) {
		navigate('/login');
	}

	return (
		<Container>
			{favorites?.length > 0 && <h2>
					<svg
				      xmlns="http://www.w3.org/2000/svg"
				      width="24"
				      height="24"
				      fill="#E72626"
				      viewBox="0 0 24 24"
				    >
				      <path
				        stroke="#E72626"
				        strokeLinecap="round"
				        strokeLinejoin="round"
				        strokeWidth="1.5"
				        d="M12 20s9-4 9-10.286C21 6 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38l-.52.54a1 1 0 01-1.44 0l-.52-.54A4.465 4.465 0 007.546 4C5 4 3 6 3 9.714 3 16 12 20 12 20z"
				      ></path>
				    </svg>
					Meus favoritos
				</h2>}
			{favorites?.length > 0 ? favorites?.map((favorite) => (
				<ProductCard key={favorite.product.id}>
					<img src={`products/${favorite?.product.product_category}/${favorite?.product.icon_reference}.png`} alt={favorite?.product.icon_reference} />

					<ProductDetails>
						<ProductDescription to={`/produto/${favorite?.product.product}`}>
							{favorite?.product.product}
						</ProductDescription>

						<ProductPrice>
							<small>
								{currencyFormatter(((favorite?.product.price * 10) / 100) + favorite?.product.price)}
							</small>
							<strong>
								{currencyFormatter(favorite?.product.price)}
							</strong>	
						</ProductPrice>
					</ProductDetails>

					<Actions>
							<button onClick={() => handleUnlikeProduct(favorite.product)}>
								<svg
							      xmlns="http://www.w3.org/2000/svg"
							      width="32"
							      height="32"
							      fill="#E72626"
							      viewBox="0 0 24 24"
							    >
							      <path
							        stroke="#E72626"
							        strokeLinecap="round"
							        strokeLinejoin="round"
							        strokeWidth="1.5"
							        d="M12 20s9-4 9-10.286C21 6 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38l-.52.54a1 1 0 01-1.44 0l-.52-.54A4.465 4.465 0 007.546 4C5 4 3 6 3 9.714 3 16 12 20 12 20z"
							      ></path>
				    			</svg>
							</button>

							<button onClick={() => handleAddToCart(favorite?.product, true)}>
								<svg
							      xmlns="http://www.w3.org/2000/svg"
							      width="36"
							      height="36"
							      fill="none"
							      viewBox="0 0 24 24"
							    >
							      <circle cx="10" cy="19" r="1.5" stroke="#FF6500"></circle>
							      <circle cx="17" cy="19" r="1.5" stroke="#FF6500"></circle>
							      <path
							        stroke="#FF6500"
							        strokeLinecap="round"
							        strokeLinejoin="round"
							        d="M3.5 4h2l3.504 11H17"
							      ></path>
							      <path
							        stroke="#FF6500"
							        strokeLinecap="round"
							        strokeLinejoin="round"
							        d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 01.475.658l-1.667 5a.5.5 0 01-.474.342H8.224z"
							      ></path>
							    </svg>
							</button>
						</Actions>
				</ProductCard>
			)) : (
				<EmptyFavorites>
					<strong>Você ainda não adicionou nenhum produto aos favoritos</strong>

					 <img src={emptyFavoritesImg} alt="Favoritos Vazio" />

					 <NavigateTo href="/">
					 	<svg
					      xmlns="http://www.w3.org/2000/svg"
					      width="24"
					      height="24"
					      fill="none"
					      viewBox="0 0 24 24"
					    >
					      <path
					        stroke="#fff"
					        strokeLinecap="round"
					        strokeLinejoin="round"
					        strokeWidth="1.5"
					        d="M12 20s9-4 9-10.286C21 6 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38l-.52.54a1 1 0 01-1.44 0l-.52-.54A4.465 4.465 0 007.546 4C5 4 3 6 3 9.714 3 16 12 20 12 20z"
					      ></path>
					    </svg>
					 	EXPERIMENTE AGORA
					 </NavigateTo>
				</EmptyFavorites>
			)}
		</Container>
	)
}

const ProductDescription = styled(Link)`
	font-weight: 700;
	color: var(--font-color);
`