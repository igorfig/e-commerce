import { useState, useEffect } from 'react';
import Storage from '../../utils/storage.js';
import { useCart } from '../../hooks/useCart';
import { Container, EmptyCartContainer, Button, CartContent,  } from './styles';
import { UserAddress } from '../../components/UserAddress';
import { CartProduct } from '../../components/CartProduct';
import { CartResume } from '../../components/CartResume';

import emptyCartImg from '../../assets/layout/emptyCart.svg';
import cartImg from '../../assets/label/cart.svg';
export function Cart() {
	const { cartProducts } = useCart();
	return(
		<Container>
			{cartProducts.length === 0 && <EmptyCartContainer>
				<strong>
					O seu carrinho está vazio.	
				</strong>

				<img src={emptyCartImg} alt="Carrinho vazio" />

				<Button href="/">
					<img src={cartImg} alt="Carrinho" />
					CONTINUAR COMPRANDO
				</Button>	
			</EmptyCartContainer>}

			{cartProducts.length > 0 && <CartContent>
				<div>
					<UserAddress />
					<CartProduct products={cartProducts}/>
				</div>	
				<CartResume />
			</CartContent>}
		</Container>
	)
};