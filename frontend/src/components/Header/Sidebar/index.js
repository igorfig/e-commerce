import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { api } from '../../../services/api';
import { useAuth } from '../../../hooks/useAuth';
import { currencyFormatter } from '../../../utils/currencyFormatter.js';
import { 
	SidebarOverlay,
	Container,
	SidebarHeader,
	Options,
	Logo,
	Button,
	Actions
 } from './styles';
import { SearchBar } from '../SearchBar/'
import { AuthButton } from '../../Buttons/AuthButton'
import { CartButton } from '../../Buttons/CartButton'

import menuImg from '../../../assets/label/menu.svg'
import userImg from '../../../assets/label/user.svg'
import cartImg from '../../../assets/label/cart.svg'
import orderImg from '../../../assets/label/order.svg'
import starImg from '../../../assets/label/star.svg'

export function Sidebar({ isActive }) {
	const OptionsContainerRef = useRef();
	const { logout } = useAuth();
	const token = Cookies.get('token');
	const handleCloseSidebar = () => {
		isActive(false);
	}

	useEffect(() => {
		const childrens = Array.from(OptionsContainerRef.current.children);

		childrens.forEach(children => children.addEventListener('click', handleCloseSidebar));

		return () => childrens.forEach(children => children.removeEventListener('click', handleCloseSidebar));
	}, [])


	return(
		<SidebarOverlay Sidebar={isActive}>
			<Container>
				<SidebarHeader>
					<div>
						<Logo href="/">
							<span>
								L
								<sup>
									S
								</sup>
							</span>
						</Logo>
						<Button onClick={handleCloseSidebar}>
							<img src={menuImg} />
						</Button>
					</div>
				</SidebarHeader>

				<Options ref={OptionsContainerRef}>
					<LinkButton to="/pedidos">
						<img src={orderImg}/>
						Meus pedidos
					</LinkButton>

					<LinkButton to={token ? '/favoritos' : '/login'}>
						<svg
					      xmlns="http://www.w3.org/2000/svg"
					      width="24"
					      height="24"
					      fill="none"
					      viewBox="0 0 24 24"
					    >
					      <path
					        stroke="#fff"
					        strokeLinecap="round"
					        strokeLinejoin="round"
					        strokeWidth="1.5"
					        d="M12 20s9-4 9-10.286C21 6 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38l-.52.54a1 1 0 01-1.44 0l-.52-.54A4.465 4.465 0 007.546 4C5 4 3 6 3 9.714 3 16 12 20 12 20z"
					      ></path>
				    	</svg>

				    	Meus favoritos
					</LinkButton>

					<LinkButton to="/carrinho">
						<img src={cartImg} />
						Meu carrinho
					</LinkButton>	

					<LinkButton to="/#featured">
						<img src={starImg} />
						Destaques
					</LinkButton>
				</Options>
				<Actions>
					<AuthButton />
					<CartButton />
				</Actions>
			</Container>
		</SidebarOverlay>
	)
}

const LinkButton = styled(Link)`
	color: var(--white);
	font-weight: 700;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	gap : .5rem;

	img {
		max-width: 24px;
	}
`