import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../Card';

export function ProductsList() {
	const carouselRef = useRef(null);
	const [width, setWidth] = useState(0);

	useEffect(() => setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth),[])
	return (
		<motion.div className="products-list"  whileTap={{cursor: "grabbing"}} ref={carouselRef}>
			<motion.div 
				className="card-carousel-container" 
				drag="x" 
				dragConstraints={{
					right: 0,
					left: -width + 180
				}}
				initial={{ x: 200}} 
				animate= {{ x: 0 }}
				transtion={{ duration: 0.8 }}
				>
				 {[1,2,3,4 ,5 ,6, 7, 8].map((item, index) => <Card key={Math.random()}/>)}
			</motion.div>
		</motion.div>
	)
}