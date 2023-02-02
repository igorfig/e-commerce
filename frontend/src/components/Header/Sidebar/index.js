import { useState, useEffect } from 'react';
import { api } from '../../../services/api'
import { currencyFormatter } from '../../../utils/currencyFormatter.js'
import { 
	SidebarOverlay,
	Container,
	SidebarHeader,
	Logo,
	Button,
	ResultList,
	Result,
	ProductInfo,
	Actions
 } from './styles';
import { SearchBar } from '../SearchBar/'
import { AuthButton } from '../../Buttons/AuthButton'
import { CartButton } from '../../Buttons/CartButton'

import menuImg from '../../../assets/label/menu.svg'
import userImg from '../../../assets/label/user.svg'
import cartImg from '../../../assets/label/cart.svg'

export function Sidebar({ isActive }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const apiResponse = await api.get('/products')

				setProducts(apiResponse.data)
			} catch(err) {
				console.log('Erro')
			}

		})()
	},[])

	const handleCloseSidebar = () => {
		isActive(false);
	}

	const arr = [1,2,3, 4, 5]
	return(
		<SidebarOverlay Sidebar={isActive}>
			<Container>
				<SidebarHeader>
					<div>
						<Logo>
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
					<SearchBar />
				</SidebarHeader>
				
				<ResultList>
					{ products.map((product) => (
						<Result key={product.id}>
							<img src={`images/${product.icon_reference}.jpg`} width={48} height={48}/>
							<ProductInfo>
								<a href="#" className="description">
									{product.product.length > 40 ? product.product.substr(0, 40) + '...' : product.product}
								</a>
								<strong>{currencyFormatter(product.price)}</strong>
							</ProductInfo>
							<a href="#">
								<img src={cartImg} alt="adicionar ao carrinho" />
							</a>
						</Result>
					))}

				</ResultList>
				<Actions>
					<AuthButton />
					<CartButton />
				</Actions>
			</Container>
		</SidebarOverlay>
	)
}