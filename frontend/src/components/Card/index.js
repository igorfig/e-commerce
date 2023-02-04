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
import cartImg from '../../assets/label/cart.svg'
import starImg from '../../assets/layout/star.svg'

export function Card() {
	const arr = [1,2,3,4,5]
	const url = 'PROCESSADOR AMD RYZEN 5 5500, 6-CORE, 12-THREADS, 3.6GHZ (4.2GHZ TURBO), CACHE 19MB, AM4, 100-100000457BOX'.toLowerCase();
	const urlFormatted = url.replace(/[ ,]+/g, "-")

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
				<ProductDescription href={`/${urlFormatted}`}>Processador AMD Ryzen 5 5600X, 3.7GHz (4.6GHz Max Turbo), Cache 35M...</ProductDescription>
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