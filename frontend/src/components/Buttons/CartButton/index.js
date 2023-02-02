import { Container, Link, CartButtonContent } from './styles.js'

import cartImg from '../../../assets/label/cart.svg'

export function CartButton() {
	return (
		<Link href="/carrinho">
			<img src={cartImg} alt="Carrinho de Compras"/>
			<CartButtonContent>
				<small>Carrinho</small>
				<strong>0 Produtos</strong>
			</CartButtonContent>
		</Link>
	)
}