import { useState, useEffect } from 'react';
import { 
	Container, 
	Header, 
	CurrentPath, 
	Banner, 
	Title, 
	ProductsSection,
	Product,
	Info,
	Actions
} 
from './styles';

import cartImg from '../../assets/label/cart.svg'
import { Card } from '../../components/Card';
import { useProducts } from '../../hooks/useProducts';
import { useParams } from 'react-router-dom';
import { currencyFormatter } from '../../utils/currencyFormatter';

export function ProductCategory() {
	const products = useProducts([]);
	const [productsMatches, setProductsMatches] = useState([]);
	const { optionalPath, category } = useParams();
	useEffect(() => {
		if(!optionalPath) {
			const matches = products.filter(product => product.product_category.toLowerCase().includes(category.toLowerCase()));
			console.log({matches});
			setProductsMatches(matches);
		}
	}, [category, products]);

	useEffect(() => {
		if(optionalPath) {
			const matches = products.filter(product => product.product_category.toLowerCase().includes(optionalPath.toLowerCase()));
			const smartphones = matches.filter(product => category.toLowerCase() === 'apple' ? product.specs.marca.toLowerCase() === 'apple' : product.specs.marca.toLowerCase() !== 'apple');
			

			setProductsMatches(smartphones);
		}
	}, [category, optionalPath, products]);

	return (
		<Container>
			<Header>
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
					{optionalPath ? (
						<>
							<a href={`/${optionalPath}`}>
								{optionalPath.toUpperCase()}
							</a>

							<span>➛</span>

							 <a href={`/${optionalPath}/${category}`}>
				    			{category.replace(/-/g, " ").toUpperCase()}
				    		</a>
						</>
					) : <a href={`/${category}`}>{category.replace(/-/g, " ").toUpperCase()}</a>}
				   
				</CurrentPath>

				<Banner>
					<img src="/banner/banner2_img.jpg" alt="Banner de promoção" />
				</Banner>
					<Title>
						<h2>{category.replace(/-/g, " ").toUpperCase()}</h2>
					</Title>	
			</Header>
			<ProductsSection>
				{productsMatches.map(product => <Product key={product.id} product={product}>
					<img 
						src={`/products/${product.product_category}/${product.icon_reference}.png`} 
						alt={product.product} />
						{console.log(`products/${product.product_category}/${product.icon_reference}.png`)}
					<Info>
						<span>{product.product}</span>
						<small>{currencyFormatter(product?.price + ((product?.price * 30) / 100))}</small>
						<strong>{currencyFormatter(product.price)}</strong>
					</Info>

					<button>
						<svg
					      xmlns="http://www.w3.org/2000/svg"
					      width="36"
					      height="36"
					      fill="none"
					      viewBox="0 0 24 24"
					    >
					      <circle cx="10" cy="19" r="1.5" stroke="#FF6500"></circle>
					      <circle cx="17" cy="19" r="1.5" stroke="#FF6500"></circle>
					      <path
					        stroke="#FF6500"
					        strokeLinecap="round"
					        strokeLinejoin="round"
					        d="M3.5 4h2l3.504 11H17"
					      ></path>
					      <path
					        stroke="#FF6500"
					        strokeLinecap="round"
					        strokeLinejoin="round"
					        d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 01.475.658l-1.667 5a.5.5 0 01-.474.342H8.224z"
					      ></path>
					    </svg>
					</button>
			 	</Product>)}
			</ProductsSection>
		</Container>
	)
}