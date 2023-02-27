import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../Card';

function ProductsList({ className, products }) {
	const carouselRef = useRef(null);
	const [width, setWidth] = useState(0);
	useEffect(() => setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth),[products])

	return (
		<motion.div className={className} whileTap={{cursor: "grabbing"}} ref={carouselRef}>
			<motion.div 
				className="card-carousel-container" 
				drag="x" 
				dragConstraints={{
					right: 0,
					left: -width
				}}
				initial={{ x: 200}} 
				animate= {{ x: 0 }}
				transtion={{ duration: 0.8 }}
				>
				 {products.map((product) => <Card key={product.id} product={product}/>)}
			</motion.div>
		</motion.div>
	)
}

export const StyledProductsList = styled(ProductsList)`
	display: flex;
	row-gap: 3rem;
	align-items: center;
		
	max-width: 100%;

	@media(max-width: 640px) {
		max-width: 800px;
	}
	padding: 5rem 0;
	margin: 0 2rem;

	@media(max-width: 640px) {
		padding: 5rem 1rem;
	}
	overflow-x: hidden;
	
	div.card-carousel-container {
		display: flex;
		cursor: grab;
		
		&::-webkit-scrollbar {
			display: none;
		}
	}
`