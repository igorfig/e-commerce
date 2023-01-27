import { 
	Container, 
	ProductInfo, 
	ProductUnit,
	ProductRate,
	ProductSpecifications,
	ProductDescription,
	ProductPrice,
	CartButton
} from './styles'
import cartImg from '../../assets/cart.svg'
import starImg from '../../assets/star.svg'

export function Card() {
	const arr = [1,2,3,4,5]
	return (
		<Container>
			<ProductInfo>
				<div className="unit">
					RESTAM 12 UNID.
				</div>

				<ProductRate>
					{arr.map((v, index) => (
						<img src={starImg} alt="Nota 5" key={index}/>
					))}

					<small>( 194 )</small>
				</ProductRate>
			</ProductInfo>

			<ProductSpecifications onMouseDown={(e) => e.preventDefault()}> 
				<img src="images/proc-ryz-5.jpg"/>
				<ProductDescription href="#">Processador AMD Ryzen 5 5600X, 3.7GHz (4.6GHz Max Turbo), Cache 35M...</ProductDescription>
			</ProductSpecifications>

			<ProductPrice>
				<small>R$ 2.599,99</small>
				<strong>R$ 1.169,99</strong>
				<span>À vista no PIX</span>
			</ProductPrice>

			<CartButton>
				<img src={cartImg} />
				COMPRAR
			</CartButton>
		</Container>
	)
}