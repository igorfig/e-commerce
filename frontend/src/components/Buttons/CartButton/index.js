import { Container, Link, CartButtonContent } from './styles.js'

import { useCart } from '../../../hooks/useCart';
import cartImg from '../../../assets/label/cart.svg'

export function CartButton(props) {
	const { cartProductsAmount } = useCart();

	return (
		<Link href="/carrinho" {...props}>
			<img src={cartImg} alt="Carrinho de Compras"/>
			<CartButtonContent>
				<small>Carrinho</small>
				<strong>{cartProductsAmount} Produtos</strong>
			</CartButtonContent>
		</Link>
	)
}