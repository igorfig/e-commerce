import { useState, useEffect } from 'react';

import  "react-responsive-carousel/lib/styles/carousel.min.css" ;
import  {  Carousel as ResponsiveCarousel  }  from  'react-responsive-carousel' ;

import { Container } from './styles.js';

export function Carousel({ banners, changeBackgroundColor, applyOpacity }) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		changeBackgroundColor(index)
	}, [index])

	return (
		<Container applyOpacity={applyOpacity}>
			<ResponsiveCarousel showThumbs={false} showStatus={false} onChange={(index) => setIndex(index)} emulateTouch autoPlay infiniteLoop>
				{banners.map((banner, index) => (
					<div key={index}>
						<img src={`banner/${banner.fileName}`} alt="Banner" />
					</div>
				))}		
			</ResponsiveCarousel>
		</Container>
	)
};