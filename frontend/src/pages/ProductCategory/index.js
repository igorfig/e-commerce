import { 
	Container, 
	Header, 
	CurrentPath, 
	Banner, 
	Title, 
	ProductsSection 
} 
from './styles';

import { Card } from '../../components/Card';

export function ProductCategory() {
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
				    <small>
				    	PROCESSADORES
				    </small>
				</CurrentPath>

				<Banner>
					<img src="/banner/banner2_img.jpg" alt="Banner de promoção" />
				</Banner>
					<Title>
						<h2>PROCESSADORES</h2>
					</Title>	
			</Header>
			<ProductsSection>
				{new Array(8).fill(0).map((product, index) => <Card key="index"/>)}
			</ProductsSection>
		</Container>
	)
}