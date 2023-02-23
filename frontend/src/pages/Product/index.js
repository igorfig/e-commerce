import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { 
	Container, 
	CurrentPath, 
	ProductContainer, 
	ProductInfo, 
	ProductImage,
	ProductSpecSheet, 
	PaymentCardInfo, 
	ProductDetails, 
	ProductPrice, 
	InstallmentTable,
	BuyButton
} 
from './styles';

import visaCardImg from '../../assets/creditCardFlags/visa.png';
import mcCardImg from '../../assets/creditCardFlags/mc.png';
import aeCardImg from '../../assets/creditCardFlags/ae.png';
import eloCardImg from '../../assets/creditCardFlags/elo.png';
import cartImg from '../../assets/label/cart.svg';

export function Product() {
	const [dbProducts, setDbProducts] = useState([]);
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const apiResponse = await api.get('/products');
				const data = apiResponse.data;

				setDbProducts(data);
				setEntries(Object.entries(data[0].specs));
			} catch(err) {
				console.error(err.message);
			}
		})()
	}, [])

	return (
		<Container>
			<h2>{dbProducts[0]?.product}</h2>
			<CurrentPath>
				<a href="/">
					 <svg
				      xmlns="http://www.w3.org/2000/svg"
				      width="18"
				      height="18"
				      fill="#ff8b2b"
				      viewBox="0 0 24 24"
				    >
				      <path d="M3.012 10.981L3 11h2v9a1 1 0 001 1h12a1 1 0 001-1v-9h2a1 1 0 00.555-1.832l-9-6a1 1 0 00-1.11 0l-9 6a1 1 0 00-.277 1.387.98.98 0 00.844.426zM10 14a1 1 0 011-1h2a1 1 0 011 1v5h-4z"></path>
				    </svg>
				</a>
				<span>➛</span>
			    <small>
			    	{dbProducts[0]?.product}
			    </small>
			</CurrentPath>

			<ProductContainer>
				<ProductInfo>
					<Zoom>
						<ProductImage 
							src={`products/${dbProducts[0]?.product_category}/${dbProducts[0]?.icon_reference}.png`} 
							alt="Processador AMD Ryzen 5" />
					</Zoom>
					<ProductSpecSheet>
						<h2>
							<svg
						      xmlns="http://www.w3.org/2000/svg"
						      width="24"
						      height="24"
						      fill="#ff8b2b"
						      viewBox="0 0 32 32"
						    >
						      <path
						        fillRule="evenodd"
						        d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm1.3 20.5h-2.6v2.6h2.6zM16 9a4 4 0 00-4 4h2l.005-.15A2 2 0 1116 15h-1v4h2v-2.126A4.002 4.002 0 0016 9z"
						      ></path>
						    </svg>
							FICHA TÉCNICA
						</h2>
						
						<div>
							<h3>Especificações Gerais:</h3>
							{entries.map(([key, value]) => (
								<span key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: <strong>{value}</strong></span>
							))}
						</div>
						
					</ProductSpecSheet>
				</ProductInfo>

				<PaymentCardInfo>
					<ProductDetails>
						<small>Vendido e entregue por: <strong>Link Start</strong></small>
						<strong>Produto em Estoque</strong>
					</ProductDetails>

					<ProductPrice>
						<small>R$ 2.223,78</small>
						<strong>R$ 1.329,99</strong>
						<span>Em até 10x de <strong>R$ 156,46</strong> sem juros no cartão</span>

						<h3>
						 	<svg
						      xmlns="http://www.w3.org/2000/svg"
						      width="24"
						      height="24"
						      fill="#ff8b2b"
						      viewBox="0 0 16 16"
						    >
						      <g>
						        <path d="M2.55 9.75h2V11h-2z"></path>
						        <path d="M15.32 2.5H.68a.69.69 0 00-.68.71v9.58a.69.69 0 00.68.71h14.64a.69.69 0 00.68-.71V3.21a.69.69 0 00-.68-.71zm-.57 1.25V5H1.25V3.75zm-13.5 8.5V7.5h13.5v4.75z"></path>
						      </g>
						    </svg>
							OPÇÕES DE PARCELAMENTO
						</h3>
						<InstallmentTable>
							<span>1x com 10% de desconto - R$ 317,64</span>
							<span>2x sem juros de R$ 176,46</span>
							<span>3x sem juros de R$ 117,64</span>
							<span>4x sem juros de R$ 88,23</span>
							<span>5x sem juros de R$ 70,58</span>
							<span>6x sem juros de R$ 58,82</span>
							<span>7x sem juros de R$ 50,41</span>
							<span>8x sem juros de R$ 44,11</span>
							<span>9x sem juros de R$ 39,21</span>
							<span>10x sem juros de R$ 35,29</span>

							<div>
								<img src={visaCardImg} alt="Visa Card" />
								<img src={mcCardImg} alt="MasterCard Card" />
								<img src={aeCardImg} alt="American Express Card" />
								<img src={eloCardImg} alt="Elo Card" />
							</div>
						</InstallmentTable>
					</ProductPrice>

					<BuyButton>
						<img src={cartImg} />
						COMPRAR
					</BuyButton>
				</PaymentCardInfo>
			</ProductContainer>		
		</Container>
	)
}