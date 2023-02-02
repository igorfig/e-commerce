import { useState, useEffect, useRef } from 'react';
import { 
	Container,
	SectionsSeparator,
	BannersContainer,
	GamerStation,
	GamerStationHeader
 } from './styles.js'
import { StyledProductsList } from '../ProductsList'
import { Card } from '../Card';
import logoGamerImg from '../../assets/layout/logoGamer.png'
import rightArrowImg from '../../assets/label/arrow.svg'

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
			<SectionsSeparator>
				<strong>DESTAQUES ★</strong>
			</SectionsSeparator>
			
			<StyledProductsList />

			<SectionsSeparator>
				<strong>MAIS VENDIDOS</strong>
			</SectionsSeparator>

			<StyledProductsList />
			<BannersContainer>
				<img src="banner/banner_img.jpg" />
			</BannersContainer>

			<SectionsSeparator>
				<strong>MAIS PROCURADOS</strong>
			</SectionsSeparator>

			<StyledProductsList />

			<GamerStation>	
				<GamerStationHeader>
					<img src={logoGamerImg} alt="Logo Gamer"/> 
					<h2>	
						ESPAÇO GAMER
					</h2>
				</GamerStationHeader>

				<StyledProductsList />
			</GamerStation>
		</Container>
	)
}