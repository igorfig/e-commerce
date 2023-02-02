import { Link } from 'react-router-dom';
import { Container, PriceDetails, TotalPrice, Button, NavLink } from './styles';
import moneyImg from '../../assets/layout/money.svg'

export function CartResume() {
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
						 R$ 1.399,99
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
					<strong>R$ 1.399,99</strong>
				</div>	

				<small>parcelas até <strong>10x</strong> de <strong>R$370,00 sem juros</strong></small>
			</TotalPrice>
			
			<Button>
				FINALIZAR PEDIDO
			</Button>
		</Container>
	)
}