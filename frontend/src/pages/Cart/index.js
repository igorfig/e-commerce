import { Container, EmptyCartContainer, Button, CartContent,  } from './styles';
import { UserAddress } from '../../components/UserAddress';
import { CartProduct } from '../../components/CartProduct';
import { CartResume } from '../../components/CartResume';

import emptyCartImg from '../../assets/layout/emptyCart.svg';
import cartImg from '../../assets/label/cart.svg';
export function Cart() {
	return(
		<Container>
			{false && <EmptyCartContainer>
				<strong>
					O seu carrinho está vazio.	
				</strong>

				<img src={emptyCartImg} alt="Carrinho vazio" />

				<Button href="/">
					<img src={cartImg} alt="Carrinho" />
					CONTINUAR COMPRANDO
				</Button>	
			</EmptyCartContainer>}

			<CartContent>
				<div>
					<UserAddress />
					<CartProduct/>
				</div>	
				<CartResume />
			</CartContent>
		</Container>
	)
};