import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { 
	Container, 
	ProductInfo, 
	ProductUnit,
	ProductRate,
	ProductSpecifications,
	ProductImageContainer,
	ProductPrice,
	CartButton
} from './styles'
import cartImg from '../../assets/label/cart.svg'
import starImg from '../../assets/layout/star.svg'
import { currencyFormatter } from '../../utils/currencyFormatter';
import { useProducts } from '../../hooks/useProducts';

export function Card({ product }) {
	const arr = [1,2,3,4,5]
	return (
		<Container>
			<ProductInfo>
				<div className="unit">
					RESTAM {product.amount} UNID.
				</div>

				<ProductRate>
					{arr.map((v, index) => (
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

			<CartButton>
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