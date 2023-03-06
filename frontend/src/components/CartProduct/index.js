import { useRef } from 'react';
import Storage from '../../utils/storage.js';
import { Container, ProductHeader, ProductContainer } from './styles';
import { CartProductContent } from '../CartProductContent';
import { useCart } from '../../hooks/useCart';
import shoppingBagImg from '../../assets/layout/shoppingBag.svg';

export function CartProduct({ products }) {
	const { handleRemoveAllProducts } = useCart();
	return (
		<Container>
			<ProductHeader>
				<h2>
					<img src={shoppingBagImg} />
					PRODUTOS
				</h2>	

				<button onClick={handleRemoveAllProducts}>
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
					REMOVER TODOS OS PRODUTOS
				</button>

				<span>Vendido e entregue por: <strong>Link Start</strong></span>
			</ProductHeader>

			<ProductContainer>
				{products && products.map((product) => <CartProductContent key={product.id} product={product}/>)}
			</ProductContainer>
		</Container>
	)
}