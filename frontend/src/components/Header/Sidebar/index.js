import { useState, useEffect } from 'react';
import { api } from '../../../services/api'
import { currencyFormatter } from '../../../utils/currencyFormatter.js'
import { Overlay } from './styles';
import { SearchBar } from '../SearchBar/'
import { AuthButton } from '../../Auth/Button/'
import { CartButton } from '../../Cart/Button/'

import menuImg from '../../../assets/menuOff.svg'
import userImg from '../../../assets/user.svg'
import cartImg from '../../../assets/cart.svg'

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
		<Overlay Sidebar={isActive}>
			<div className="sidebar-container">
				<div className="header">
					<span className="title">
						<span className="logo">L<sup className="logo-sup">S</sup></span>
					</span>
					<button onClick={handleCloseSidebar}>
					<img src={menuImg} />
				</button>
	
			</div>

				
		
			<div className="search-engine-container">
				<SearchBar />
			</div>
		

			<ul>
				
				{ products.map((product) => (
					<li key={product.id}>
						<img src={`images/${product.icon_reference}.jpg`} width={48} height={48}/>
						<span>
							<a href="#" className="description">
								{product.product.length > 40 ? product.product.substr(0, 40) + '...' : product.product}
							</a>
							<strong>{currencyFormatter(product.price)}</strong>
						</span>
						<a href="#">
							<img src={cartImg} alt="adicionar ao carrinho" />
						</a>
					</li>
				))}

			</ul>
			
			
		
			<div className="actions">
				<AuthButton />
				<CartButton />
			</div>
		
		
			</div>
		</Overlay>
	)
}