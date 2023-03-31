import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { api } from '../../services/api';
import { dateFormatter } from '../../utils/dateFormatter';
import emptyOrdersImg from '../../assets/layout/emptyOrders.svg';
import arrowImg from '../../assets/label/arrow.svg';

import { 
	Container,
	EmptyOrders,
	NavigateTo,
	OrderCard,
	ProductDetails,
	OrderStatus,
	OrderTrack
} from './styles';

export function Orders() {
	const [orders, setOrders] = useState();
	const navigate = useNavigate();
	const token = Cookies.get('token');

	useEffect(() => {
		if(!token) navigate('/login');
	}, []);

	useEffect(() => {
		(async () => {
			if(token) {
				const user = JSON.parse(Cookies.get('user'));

				const response = await api.get(`/user/orders/?userId=${user.id}`)
				const data = response.data;

				setOrders(response.data);
			}
		})()
	}, [])

	return (
		<Container>
			{orders?.length > 0 ? (
				<>
					<h2>
					<svg
					    width={48}
					    height={48}
					    viewBox="0 0 120 120"
					    id="Layer_1"
					    xmlSpace="preserve"
					    xmlns="http://www.w3.org/2000/svg"
					    fill="#ff8b2b"
					  >
					    <g id="SVGRepo_iconCarrier">
					      <style>{".st0{fill:##ff8b2b}.st1{opacity:.1}.st3{fill:#ff8b2b}"}</style>
					      <path
					        className="st0"
					        d="m17.8 57.2 6.9 34.1c.7 3.6 4.4 6.3 8.6 6.3h53.4c4.3 0 7.9-2.7 8.6-6.3l6.9-34.1H17.8zM47.4 88c0 1-.8 1.8-1.8 1.8h-4.2c-1 0-1.8-.8-1.8-1.8V66.7c0-1 .8-1.8 1.8-1.8h4.2c1 0 1.8.8 1.8 1.8V88zm16.5 0c0 1-.8 1.8-1.8 1.8h-4.2c-1 0-1.8-.8-1.8-1.8V66.7c0-1 .8-1.8 1.8-1.8h4.2c1 0 1.8.8 1.8 1.8V88zm16.6 0c0 1-.8 1.8-1.8 1.8h-4.2c-1 0-1.8-.8-1.8-1.8V66.7c0-1 .8-1.8 1.8-1.8h4.2c1 0 1.8.8 1.8 1.8V88z"
					      />
					      <path
					        d="M89.1 96.7H35.7c-4.3 0-7.9-2.7-8.6-6.3l-6.7-33.2h-2.5l6.9 34.1c.7 3.6 4.4 6.3 8.6 6.3h53.4c1.6 0 3.2-.4 4.5-1.1-.8.1-1.5.2-2.2.2z"
					        className="st1"
					      />
					      <path
					        d="M105.4 57.2H14.6c-1 0-1.8-.8-1.8-1.8v-6.6c0-1 .8-1.8 1.8-1.8h90.9c1 0 1.8.8 1.8 1.8v6.6c0 1-.9 1.8-1.9 1.8z"
					        style={{
					          fill: "#ff8b2b",
					        }}
					      />
					      <path
					        className="st1"
					        d="M15.9 56.8c-1 0-1.8-.8-1.8-1.8v-6.6c0-.6.3-1.1.7-1.4h-.2c-1 0-1.8.8-1.8 1.8v6.6c0 1 .8 1.8 1.8 1.8h90.9c.4 0 .8-.2 1.1-.4H15.9z"
					      />
					      <path
					        className="st3"
					        d="M64.6 22.7 61 24.9c-.9.5-.9 2-.2 3.2L77 54.8c.8 1.3 2.1 1.9 2.9 1.3l3.6-2.2c.9-.5.9-2 .2-3.2L67.6 24c-.8-1.3-2.1-1.9-3-1.3zM55.4 22.7l3.6 2.2c.9.5.9 2 .2 3.2L43 54.8c-.8 1.3-2.1 1.9-2.9 1.3L36.5 54c-.9-.5-.9-2-.2-3.2L52.4 24c.8-1.2 2.1-1.8 3-1.3z"
					      />
					      <path
					        className="st1"
					        d="M59.2 27.4 43.1 54.1c-.8 1.3-2.1 1.9-2.9 1.3l-3.6-2.2c-.4-.2-.6-.7-.7-1.2-.1.8.1 1.5.7 1.9l3.6 2.2c.9.5 2.2-.1 2.9-1.3l16.1-26.7c.4-.7.6-1.4.5-2.1-.1.5-.3 1-.5 1.4zM60.8 27.4l16.1 26.7c.8 1.3 2.1 1.9 2.9 1.3l3.6-2.2c.4-.2.6-.7.7-1.2.1.8-.1 1.5-.7 1.9l-3.6 2.2c-.9.5-2.2-.1-2.9-1.3L60.8 28.1c-.4-.7-.6-1.4-.5-2.1.1.5.3 1 .5 1.4z"
					      />
					      <path
					        className="st0"
					        d="M40 50.2c-1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9 1 0 1.9-.8 1.9-1.9-.1-1.1-.9-1.9-1.9-1.9zM80 50.2c-1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9s1.9-.8 1.9-1.9c0-1.1-.8-1.9-1.9-1.9z"
					      />
					      <path
					        className="st1"
					        d="M40.2 53.7c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .6-1.4-.5.3-.8.9-.8 1.6 0 1 .8 1.9 1.9 1.9.5 0 .9-.2 1.3-.5-.4.2-.7.3-1.1.3zM80.3 53.7c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .6-1.4-.5.3-.8.9-.8 1.6 0 1 .8 1.9 1.9 1.9.5 0 .9-.2 1.3-.5-.4.2-.7.3-1.1.3z"
					      />
					    </g>
				  	</svg>
					Meus Pedidos
				</h2>

				{orders.map((order) => order?.order_details.map(product => <OrderCard>
					<img src={`products/${product.product_category}/${product.icon_reference}.png`} alt={product.icon_reference} />

					<ProductDetails>
						<span>
							{product.product}
						</span>

						<small>
							Pedido realizado em {dateFormatter(order.created_at)}
						</small>

						<OrderStatus>
							<h2></h2>
							<div>
								<span className="done">
									Pedido Realizado.
									<svg
								      xmlns="http://www.w3.org/2000/svg"
								      width="24"
								      height="24"
								      fill="none"
								      viewBox="0 0 24 24"
								    >
								      <g>
								        <circle
								          cx="12"
								          cy="12"
								          r="8"
								          fill="#1F9050"
								          fillOpacity="0.24"
								        ></circle>
								        <path
								          stroke="#1F9050"
								          strokeWidth="1.2"
								          d="M8.5 11l2.894 2.894a.15.15 0 00.212 0L19.5 6"
								        ></path>
								        <path
								          stroke="#1F9050"
								          strokeLinecap="round"
								          d="M19.358 10.546a7.5 7.5 0 11-3.608-5.041"
								        ></path>
								      </g>
								    </svg>
								</span> 
								

								<span className="done">
									Pagamento Aprovado.
									<svg
								      xmlns="http://www.w3.org/2000/svg"
								      width="24"
								      height="24"
								      fill="none"
								      viewBox="0 0 24 24"
								    >
								      <g>
								        <circle
								          cx="12"
								          cy="12"
								          r="8"
								          fill="#1F9050"
								          fillOpacity="0.24"
								        ></circle>
								        <path
								          stroke="#1F9050"
								          strokeWidth="1.2"
								          d="M8.5 11l2.894 2.894a.15.15 0 00.212 0L19.5 6"
								        ></path>
								        <path
								          stroke="#1F9050"
								          strokeLinecap="round"
								          d="M19.358 10.546a7.5 7.5 0 11-3.608-5.041"
								        ></path>
								      </g>
								    </svg>
								</span>
								

								<span className="done">
									Nota fiscal emitida, Produto liberado para transporte.
									<svg
								      xmlns="http://www.w3.org/2000/svg"
								      width="24"
								      height="24"
								      fill="none"
								      viewBox="0 0 24 24"
								    >
								      <g>
								        <circle
								          cx="12"
								          cy="12"
								          r="8"
								          fill="#1F9050"
								          fillOpacity="0.24"
								        ></circle>
								        <path
								          stroke="#1F9050"
								          strokeWidth="1.2"
								          d="M8.5 11l2.894 2.894a.15.15 0 00.212 0L19.5 6"
								        ></path>
								        <path
								          stroke="#1F9050"
								          strokeLinecap="round"
								          d="M19.358 10.546a7.5 7.5 0 11-3.608-5.041"
								        ></path>
								      </g>
								    </svg>
								</span>
								

								<span className="done">
									Produto em rota de entrega.
									<svg
								      xmlns="http://www.w3.org/2000/svg"
								      width="24"
								      height="24"
								      fill="none"
								      viewBox="0 0 24 24"
								    >
								      <g>
								        <circle
								          cx="12"
								          cy="12"
								          r="8"
								          fill="#1F9050"
								          fillOpacity="0.24"
								        ></circle>
								        <path
								          stroke="#1F9050"
								          strokeWidth="1.2"
								          d="M8.5 11l2.894 2.894a.15.15 0 00.212 0L19.5 6"
								        ></path>
								        <path
								          stroke="#1F9050"
								          strokeLinecap="round"
								          d="M19.358 10.546a7.5 7.5 0 11-3.608-5.041"
								        ></path>
								      </g>
								    </svg>
								</span>
								
								<span>
									Produto entregue.
									<svg
								      xmlns="http://www.w3.org/2000/svg"
								      width="24"
								      height="24"
								      fill="none"
								      viewBox="0 0 24 24"
								    >
								      <path
								        stroke="#C4C4C4"
								        strokeLinecap="round"
								        strokeLinejoin="round"
								        strokeWidth="2"
								        d="M12 3v3m-9 6h3m-.364-6.364l2.121 2.121M5.636 18.364l2.121-2.121M21 12h-3m.364-6.365l-2.121 2.122M12 21v-3m6.364.364l-2.121-2.121"
								      ></path>
								    </svg>
								</span>
							</div>
						</OrderStatus>	
					</ProductDetails>

					<OrderTrack>
						<svg
					      xmlns="http://www.w3.org/2000/svg"
					      width="24"
					      height="24"
					      fill="none"
					      viewBox="0 0 24 24"
					    >
					      <g
					        stroke="#FF6500"
					        strokeLinecap="round"
					        strokeLinejoin="round"
					        strokeWidth="1.5"
					      >
					        <path
					          d="M12 14h1c1.1 0 2-.9 2-2V2H6c-1.5 0-2.81.83-3.49 2.05"
					          opacity="0.4"
					        ></path>
					        <path d="M2 17c0 1.66 1.34 3 3 3h1c0-1.1.9-2 2-2s2 .9 2 2h4c0-1.1.9-2 2-2s2 .9 2 2h1c1.66 0 3-1.34 3-3v-3h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l-1.71-2.99A2.016 2.016 0 0016.84 5H15v7c0 1.1-.9 2-2 2h-1"></path>
					        <path d="M8 22a2 2 0 100-4 2 2 0 000 4zM16 22a2 2 0 100-4 2 2 0 000 4zM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12zM2 8h6M2 11h4M2 14h2"></path>
					      </g>
					    </svg>
						RASTREAR PEDIDO
					</OrderTrack>
				</OrderCard>))}
				</>
			):  (
				<EmptyOrders>
					<strong>Você ainda não efetuou nenhuma compra.</strong>

					<img src={emptyOrdersImg} alt="Nenhum Pedido"/>

					<span>
						Aqui, você pode conferir suas compras e acompanhar seus envios.
					</span>

					<NavigateTo href="/">FAÇA SUA PRIMEIRA COMPRA!</NavigateTo>
				</EmptyOrders>
			)}
			
		</Container>
	)
}