import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Storage from '../../utils/storage.js';
import { 
	Container,
	ProductInfo, 
	ProductRate,
	ProductSpecifications,
	ProductImageContainer,
	ProductPrice,
	CartButton
} from './styles'
import { toast } from 'react-toastify';
import cartImg from '../../assets/label/cart.svg'
import starImg from '../../assets/layout/star.svg'
import { currencyFormatter } from '../../utils/currencyFormatter';
import { useCart } from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';

export function Card({ product }) {
	const { handleAddToCart } = useCart();
	const { products, handleLikeProduct } = useProducts();

	return (
		<Container>
			<ProductInfo>
			    <button onClick={() => handleLikeProduct(product.id)} className={product.liked ? 'liked' : ''}>
			    	<svg
				      xmlns="http://www.w3.org/2000/svg"
				      width="24"
				      height="24"
				      fill="none"
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
				<ProductRate>
					{new Array(5).fill(0).map((v, index) => (
						<img src={starImg} alt="Nota 5" key={index} loading="lazy"/>
					))}

					<small>( 194 )</small>
				</ProductRate>
			</ProductInfo>

			<ProductSpecifications onMouseDown={(e) => e.preventDefault()}> 
				<ProductImageContainer>
					<img src={`products/${product.product_category}/${product.icon_reference}.png`} loading="lazy"/>
				</ProductImageContainer>
				<ProductDescription to={`/produto/${product.product}`} >{product.product.length > 60 ? product.product.substr(0, 55) + "..." : product.product}</ProductDescription>
			</ProductSpecifications>

			<ProductPrice>
				<small>R$ 2.599,99</small>
				<strong>{currencyFormatter(product.price)}</strong>
				<span>À vista no PIX</span>
			</ProductPrice>

			<CartButton onClick={() => handleAddToCart(product)}>
				<img src={cartImg} />
				COMPRAR
			</CartButton>
		</Container>
	)
}


export const ProductDescription = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: #000;
	user-select: none
	line-height: 1.2;
	height: calc(1.2em * 3);
	margin-top: 1rem;
`