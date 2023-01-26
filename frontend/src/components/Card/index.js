import { Container } from './styles'
import cartImg from '../../assets/cart.svg'
import starImg from '../../assets/star.svg'

export function Card() {
	const arr = [1,2,3,4,5]
	return (
		<Container>
			<div className="product-info">
				<div className="unit">
					RESTAM 12 UNID.
				</div>

				<div className="rate">
					{arr.map((v, index) => (
						<img src={starImg} alt="Nota 5" key={index}/>
					))}

					<small>( 194 )</small>
				</div>
			</div>

			<div className="product" onMouseDown={(e) => e.preventDefault()}> 
				<img src="images/proc-ryz-5.jpg"/>
				<a href="#">Processador AMD Ryzen 5 5600X, 3.7GHz (4.6GHz Max Turbo), Cache 35M...</a>
			</div>

			<div className="product-price">
				<s><small>R$ 2.599,99</small></s>
				<strong>R$ 1.169,99</strong>
				<span>À vista no PIX</span>
			</div>

			<button>
				<img src={cartImg} />
				COMPRAR
			</button>
		</Container>
	)
}