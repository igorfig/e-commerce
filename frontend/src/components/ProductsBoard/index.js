import { useState, useEffect, useRef } from 'react';
import { Container } from './styles.js'
import { ProductsList } from '../ProductsList'
import { Card } from '../Card';
import logoGamerImg from '../../assets/logoGamer.png'
import rightArrowImg from '../../assets/rightArrow.svg'

export function ProductsBoard({ applyOpacity }) {
	
	const handleBackCarousel = (e) => {
		e.preventDefault();
		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
	}
	const handleForwardCarousel = (e) => {
		e.preventDefault();
		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
	} 

	return (
		<Container applyOpacity={applyOpacity}>
			<span className="horizontal-row teste">
				<strong>DESTAQUES ★</strong>
				<span></span>
			</span>
			
			<ProductsList />

			<span className="horizontal-row">
				<strong>MAIS VENDIDOS</strong>
			</span>

			<ProductsList />
			<div className="banners">
				<img src="banner/banner_img.jpg" />
			</div>

			<span className="horizontal-row">
				<strong>MAIS PROCURADOS</strong>
			</span>

			<ProductsList />

			<div className="gamer-section">	
				<div className="sub">
					<img src={logoGamerImg} alt="Logo Gamer"/> 
					<h2>	
						ESPAÇO GAMER
					</h2>
				</div>

				<ProductsList />
			</div>
		</Container>
	)
}