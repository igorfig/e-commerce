import { useState, useEffect, useRef } from 'react';
import { 
	Container,
	SectionsSeparator,
	AllProducts,
	BannersContainer,
	GamerStation,
	GamerStationHeader
 } from './styles.js'
import { StyledProductsList } from '../ProductsList'
import { Card } from '../Card';
import { useProducts } from '../../hooks/useProducts';
import logoGamerImg from '../../assets/layout/logoGamer.png'
import rightArrowImg from '../../assets/label/arrow.svg'

export function ProductsBoard({ applyOpacity }) {
	const { products } = useProducts();
	const [isAllProductsSectionHide, setIsAllProductsSectionHide] = useState(false);
	const [hidden, setIsHidden] = useState(false);
	const featuredProducts = products.filter(product => product.product_category === 'placa-de-video' || product.product_category === 'processadores' || product.product_category === 'computadores');
	const bestsellingProducts = products.filter(product => product.product.includes('iPhone') || product.product.includes('Xbox Series') || product.product.includes('Playstation 5') ||product.product.includes('RTX'));
	const mostSearchedProducts = products.filter(product => product.product_category === 'smartphones' || product.product_category === 'computadores' || product.product.includes('Controle DualShock') || product.product.includes('Controle Xbox'))
	const videoGameCategoryProducts = products.filter(product => product.product_category === 'controles' || product.product_category === 'consoles');
	
	const handleToggleAllProducts = () => setIsAllProductsSectionHide(prevState => !prevState);

	useEffect(() => {
		if(isAllProductsSectionHide) {
			const timer = setTimeout(() => setIsHidden(true), 300);

			return () => clearTimeout(timer);
		} else {
			setIsHidden(false);
		}
	}, [isAllProductsSectionHide])
	return (
		<Container applyOpacity={applyOpacity}>
			<SectionsSeparator>
				<h2>APROVEITE NOSSAS PROMOÇÕES</h2>
				<button onClick={handleToggleAllProducts}>
					<svg
					  className={isAllProductsSectionHide ? "arrow-up" : ''}
				      xmlns="http://www.w3.org/2000/svg"
				      width="28"
				      height="28"
				      fill="none"
				      stroke="#000"
				      viewBox="0 0 24 24"
				    >
				      <path
				        stroke="#7F8B98"
				        strokeLinecap="round"
				        strokeLinejoin="round"
				        strokeWidth="2"
				        d="M10 16l4-4-4-4"
				      ></path>
				    </svg>
				</button>	
			</SectionsSeparator>

			<AllProducts fadeOut={isAllProductsSectionHide} hidden={hidden}>
					{products.map(product => <Card key={product.id} product={product}/>)}
			</AllProducts>

			<SectionsSeparator id="featured">
				<strong>DESTAQUES ★</strong>
			</SectionsSeparator>
			
			<StyledProductsList products={featuredProducts}/>

			<SectionsSeparator id="bestselling">
				<strong>MAIS VENDIDOS</strong>
			</SectionsSeparator>

			<StyledProductsList products={bestsellingProducts}/>
			<BannersContainer>
				<img src="banner/banner_img.jpg" loading="lazy"/>
			</BannersContainer>

			<SectionsSeparator id="most-searched">
				<strong>MAIS PROCURADOS</strong>
			</SectionsSeparator>

			<StyledProductsList products={mostSearchedProducts}/>

			<GamerStation>	
				<GamerStationHeader>
					<img src={logoGamerImg} alt="Logo Gamer" loading="lazy"/> 
					<h2>	
						ESPAÇO GAMER
					</h2>
				</GamerStationHeader>

				<StyledProductsList products={videoGameCategoryProducts} />
			</GamerStation>
		</Container>
	)
}