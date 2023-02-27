import { useState, useEffect } from 'react';
import { 
	Container,
	ResultList,
	Result,
	ProductInfo,
 } from './styles.js';
import magnifierImg from '../../../assets/label/magnifier.svg';
import { useProducts } from '../../../hooks/useProducts';
import { currencyFormatter } from '../../../utils/currencyFormatter';

export function SearchBar({ isSearchBarOnFocus = false, handleSearchBarFocus = () => {}}) {
	const [searchbarValue, setSearchbarValue] = useState('');
	const [productsMatches, setProductsMatches] = useState([]);
	const products = useProducts();

	const handleSearchProducts = (event) =>  setSearchbarValue(event.target.value);

	useEffect(() => {
		if(searchbarValue.trim().length > 0) {
			const matches = products.filter(product => product.product.toLowerCase().includes(searchbarValue.toLowerCase().trim()));

			setProductsMatches(matches);
		} else {
			setProductsMatches([]);
		}
	}, [searchbarValue, products]);

	return (
		<Container>
			<img src={magnifierImg}/>
			<label className="sr-only" htmlFor="search-engine">Pesquise aqui seu produto</label>
			<input 
				type="text" 
				placeholder="Pesquisar produto" 
				name="product-name" 
				id="search-engine" 
				value={searchbarValue} 
				onChange={handleSearchProducts} 
				autoComplete="off" 
				onFocus={() => handleSearchBarFocus(true)} 
				onBlur={() => handleSearchBarFocus(false)}/>

			{isSearchBarOnFocus && <ResultList>
				{productsMatches.map((product) => (
					<Result key={product.id}>
						<img src={`products/${product.product_category}/${product.icon_reference}.png`} loading="lazy"/>
						<ProductInfo>
							<span>{product.product}</span>
							<strong>{currencyFormatter(product.price)}</strong>
						</ProductInfo>
					</Result>
				))}
			</ResultList>}
		</Container>
	)
}