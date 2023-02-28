import { useState, useEffect, useRef} from 'react';
import { 
	Container,
	ResultList,
	Result,
	ProductInfo,
 } from './styles.js';
import magnifierImg from '../../../assets/label/magnifier.svg';
import { useProducts } from '../../../hooks/useProducts';
import { currencyFormatter } from '../../../utils/currencyFormatter';
import { useNavigate } from 'react-router-dom';

export function SearchBar({ isSearchBarOnFocus = false, handleSearchBarFocus = () => {}}) {
	const [searchbarValue, setSearchbarValue] = useState('');
	const [productsMatches, setProductsMatches] = useState([]);
	const products = useProducts();
	const navigate = useNavigate();
	const timeoutRef = useRef(null);

	const handleSearchProducts = (event) =>  setSearchbarValue(event.target.value);
	const handleRedirect = (product) => {
		navigate(`/produto/${product}`);
		handleBlur();
	}
	useEffect(() => {
		if(searchbarValue.trim().length > 0) {
			const matches = products.filter(product => product.product.toLowerCase().includes(searchbarValue.toLowerCase().trim()));

			setProductsMatches(matches);
		} else {
			setProductsMatches([]);
		}
	}, [searchbarValue, products]);

	const handleBlur = () => {
		timeoutRef.current && clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			handleSearchBarFocus(false);
		}, 100)
	}

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
				onBlur={handleBlur}
				/>

			{isSearchBarOnFocus && <ResultList>
				{productsMatches.map((product) => (
					<Result key={product.id} onClick={() => handleRedirect(product.product)}>
						<img src={`/products/${product.product_category}/${product.icon_reference}.png`} loading="lazy"/>
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