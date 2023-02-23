import { 
	Container, 
	ProductInfo, 
	ProductUnit,
	ProductRate,
	ProductSpecifications,
	ProductImageContainer,
	ProductDescription,
	ProductPrice,
	CartButton
} from './styles'
import cartImg from '../../assets/label/cart.svg'
import starImg from '../../assets/layout/star.svg'
import { currencyFormatter } from '../../utils/currencyFormatter';

export function Card({ product }) {
	const arr = [1,2,3,4,5]
	const url = 'PROCESSADOR AMD RYZEN 5 5500, 6-CORE, 12-THREADS, 3.6GHZ (4.2GHZ TURBO), CACHE 19MB, AM4, 100-100000457BOX'.toLowerCase();
	const urlFormatted = url.replace(/[ ,]+/g, "-")

	return (
		<Container>
			<ProductInfo>
				<div className="unit">
					RESTAM {product.amount} UNID.
				</div>

				<ProductRate>
					{arr.map((v, index) => (
						<img src={starImg} alt="Nota 5" key={index} loading="lazy"/>
					))}

					<small>( 194 )</small>
				</ProductRate>
			</ProductInfo>

			<ProductSpecifications onMouseDown={(e) => e.preventDefault()}> 
				<ProductImageContainer>
					<img src={`products/${product.product_category}/${product.icon_reference}.png`} loading="lazy"/>
				</ProductImageContainer>
				<ProductDescription href={`/${urlFormatted}`}>{product.product.length > 60 ? product.product.substr(0, 55) + "..." : product.product}</ProductDescription>
			</ProductSpecifications>

			<ProductPrice>
				<small>R$ 2.599,99</small>
				<strong>{currencyFormatter(product.price)}</strong>
				<span>À vista no PIX</span>
			</ProductPrice>

			<CartButton>
				<img src={cartImg} />
				COMPRAR
			</CartButton>
		</Container>
	)
}