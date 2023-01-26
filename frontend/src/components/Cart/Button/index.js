import { Container } from './styles.js'

import cartImg from '../../../assets/cart.svg'

export function CartButton() {
	return (
		<Container>
			<a href="#">
				<img src={cartImg} alt="Carrinho de Compras"/>
				<span>
						<small>Carrinho</small>
					<strong>0 Produtos</strong>
				</span>
			</a>
		</Container>
	)
}