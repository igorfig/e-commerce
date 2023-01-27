import { useState } from 'react';
import { 
	Container,
	ResultList,
	Result,
	ProductInfo,
 } from './styles.js'
import magnifierImg from '../../../assets/magnifier.svg'

export function SearchBar({ isSearchBarOnFocus = false, handleSearchBarFocus = () => {}}) {
	return (
		<Container>
			<img src={magnifierImg}/>
			<label className="sr-only" htmlFor="search-engine">Pesquise aqui seu produto</label>
			<input type="text" placeholder="Pesquisar produto" name="product-name" id="search-engine" autoComplete="off" onFocus={() => handleSearchBarFocus(true)} onBlur={() => handleSearchBarFocus(false)}/>

			{isSearchBarOnFocus && <ResultList>
				{new Array(8).fill(0).map((i, index) => (
					<Result key={index}>
						<img src="images/vboard-rtx-4.jpg" />
						<ProductInfo>
							<span>Placa de Vídeo Galax GeForce RTX 4090 ST, 24GB GDDR6X, ARGB, DLSS, Ray Tracing</span>
							<strong>R$ 14.999,99</strong>
						</ProductInfo>
					</Result>
				))}
			</ResultList>}
		</Container>
	)
}