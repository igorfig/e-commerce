import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Container, PriceDetails, TotalPrice, Button, NavLink } from './styles';
import { api } from '../../services/api';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { useCart } from '../../hooks/useCart';
import moneyImg from '../../assets/layout/money.svg'

export function CartResume() {
	const { cartProducts, submitUserOrder } = useCart();
	const [total, setTotal] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		const totalSum = cartProducts?.reduce((accumulator, currentValue) => {
			let result;
			if(currentValue.amount > 1) {
				console.log('pinto')
				result = accumulator + currentValue.price * currentValue.amount;
			} else {
				result = accumulator + currentValue.price;
			}

			return result;
		}, 0)

		setTotal(totalSum);
	}, [cartProducts])

	const handlePlaceOrder = async () => {
		const token = Cookies.get('token');
		const address = JSON.parse(Cookies.get('address'));
		if(token) {
			if(Object.keys(address).length === 0) {
				return alert('Defina seu endereço');
			}

			console.log(cartProducts);
				
			const user = JSON.parse(Cookies.get('user'));

			
			try {
				const response = await api.post(`/user/orders`, {
					user_id: user.id,
					order_details: cartProducts
				})

				if(response.status === 200) {
					submitUserOrder();
					navigate('/pedidos')
				};


			} catch(err) {
				console.log(err)
			}
		} else {
			navigate('/login');
		}
	}

	return (
		<Container>
			<h2>
				<img src={moneyImg}/>
				RESUMO
			</h2>

			<PriceDetails>
				<div>
					<span>Valor total: </span>
					<strong>
						{currencyFormatter(total)}
					</strong>
				</div>
				<div>
					<span>Frete: </span>
				    <strong>
					 	R$ 0,00
					</strong>
				</div>	
			</PriceDetails>

			<TotalPrice>
				<div>
					<span>Total à prazo: </span>
					<strong>{currencyFormatter(total + (total / 100) * 5)}</strong>
				</div>	

				<small>parcelas até <strong>10x</strong> de <strong>{currencyFormatter(total / 10)} sem juros</strong></small>
			</TotalPrice>
			
			<Button onClick={handlePlaceOrder}>
				FINALIZAR PEDIDO
			</Button>
		</Container>
	)
}