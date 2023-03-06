import { useState, useEffect } from 'react';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { Container, ProductDetailsContainer, TrashButton, ProductDescription, CartAmountHandler, CartAmountButtons, ProductPrice } from './styles.js';
import { useCart } from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';

export function CartProductContent({ product }) {
	const { handleAddToCart, handleRestoreStock, handleRemoveFromCart } = useCart();
	return (
		<Container>
				<ProductDetailsContainer>
				<ProductDescription>
					<img src={`/products/${product.product_category}/${product.icon_reference}.png`} alt={product.icon_reference} loading="lazy"/>
					<div>
						<span>{product.product}</span>
						<small>Parcelas em até 10x no cartão sem juros</small>
					</div>
				</ProductDescription>

				<ProductPrice>
					<span>Preço à vista: </span>
					<strong>{currencyFormatter(product.price)}</strong>
				</ProductPrice>

			</ProductDetailsContainer>

			<CartAmountHandler>
					<CartAmountButtons>
						<span>Quant.</span>
						<button onClick={() => handleRestoreStock(product.id)} disabled={product.amount === 1 ? true : false}>
						    <svg
						      xmlns="http://www.w3.org/2000/svg"
						      width="40"
						      height="40"
						      fill="none"
						      stroke="#fff"
						      transform="rotate(90)"
						      viewBox="0 0 24 24"
						    >
						      <path
						        fill="#fff"
						        fillRule="evenodd"
						        d="M6.293 8.793a1 1 0 011.414 0L12 13.086l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
						        clipRule="evenodd"
						      ></path>
						    </svg>
						</button>

						<strong>
							{product.amount}
						</strong>		

						<button onClick={() => handleAddToCart(product, false)}>
							<svg
						      xmlns="http://www.w3.org/2000/svg"
						      width="40"
						      height="40"
						      fill="none"
						      stroke="#fff"
						      transform="rotate(270)"
						      viewBox="0 0 24 24"
						    >
						      <path
						        fill="#fff"
						        fillRule="evenodd"
						        d="M6.293 8.793a1 1 0 011.414 0L12 13.086l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
						        clipRule="evenodd"
						      ></path>
						    </svg>
						</button>
				</CartAmountButtons>

				<TrashButton onClick={() => handleRemoveFromCart(product.id)}>
					<svg
				      xmlns="http://www.w3.org/2000/svg"
				      width="16"
				      height="16"
				      fill="none"
				      viewBox="0 0 24 24"
				    >
				      <path
				        fill="#E72626"
				        d="M8 1.5v1H3a1 1 0 00-1 1v1a1 1 0 001 1h18a1 1 0 001-1v-1a1 1 0 00-1-1h-5v-1a1 1 0 00-1-1H9a1 1 0 00-1 1zm-4.077 6h16.154l-.943 12.722A3 3 0 0116.143 23H7.857a3 3 0 01-2.992-2.778L3.923 7.5z"
				      ></path>
				 	</svg>
					REMOVER PRODUTO
				</TrashButton>	

			</CartAmountHandler>
		</Container>
	)
}