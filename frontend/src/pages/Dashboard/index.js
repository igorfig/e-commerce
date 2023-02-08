import { useState, useEffect } from 'react';
import { Container, DashboardTableContainer, ProductSectionSubtitle, ProductsLog, SelectProduct, ProductControlContainer, Button } from './styles';
import { DashboardTable } from '../../components/DashboardTable';

import { currencyFormatter } from '../../utils/currencyFormatter';

export function Dashboard() {
	const [products, setProducts] = useState([
		{	
			id: 1,
			name: 'PROCESSADOR AMD RYZEN 5 5500, 6-COR...',
			amount: 122,
			price: 1399.99,
			category: "Processador"
		}, 

		{
			id: 2,
			name: 'Placa de Vídeo Galax GeForce RTX 4090 ST, 24GB...',
			amount: 57,
			price: 15999.99,
			category: "Placa de vídeo"
		},

		{
			id: 3,
			name: 'PROCESSADOR AMD RYZEN 5 5500, 6-COR...',
			amount: 125,
			price: 1399.99,
			category: "Processador"
		}, 
	]);
	const [selectedProduct, setSelectedProduct] = useState();

	const handleSelectProduct = (event) => {
		setSelectedProduct({});
		const options = event.target.options;
		const optionSelected = Array.from(options).find(option => option.selected);
		const filteredProduct = products.find(product => product.name.toLowerCase().includes(optionSelected.value.toLowerCase()));
		setSelectedProduct(filteredProduct);
	}


	const handleUpdateSupplyAmount = (event) => {
		setSelectedProduct((prevState) => ({
			...prevState,
			amount: Number(event.target.value)
		}))
	}

	const handleUpdateProductPrice = (event) => {
		setSelectedProduct((prevState) => ({
			...prevState,
			price: Number(event.target.value)
		}))
	}


	const handleSaveChanges = () => {
		const productsUpdated = products.filter(product => product.id !== selectedProduct.id);

		const sortedProducts = [...productsUpdated, selectedProduct].sort((a, b) => a.id - b.id);

		setProducts(sortedProducts);
	}



	useEffect(() => console.log(selectedProduct), [selectedProduct])

	return (
		<Container>
			<h2>
				<svg
				      xmlns="http://www.w3.org/2000/svg"
				      width="32"
				      height="32"
				      fill="#ff8b2b"
				      version="1.1"
				      viewBox="0 0 612 612"
				      xmlSpace="preserve"
				    >
			      <g>
			        <path d="M545.325 500.685H66.675c-30.737 0-55.657 24.92-55.657 55.657 0 30.737 24.92 55.657 55.657 55.657h478.65c30.737 0 55.657-24.92 55.657-55.657 0-30.738-24.92-55.657-55.657-55.657zM129.753 464.922c30.737 0 55.657-24.92 55.657-55.657v-212.61c0-30.737-24.92-55.657-55.657-55.657s-55.657 24.92-55.657 55.657v212.61c-.001 30.737 24.92 55.657 55.657 55.657zM306.002 464.922c30.737 0 55.657-24.92 55.657-55.657V126.157c0-30.737-24.92-55.657-55.657-55.657s-55.657 24.92-55.657 55.657v283.108c0 30.737 24.918 55.657 55.657 55.657zM482.245 464.922c30.737 0 55.655-24.92 55.655-55.657V55.657C537.903 24.92 512.984 0 482.245 0c-30.737 0-55.657 24.92-55.657 55.657v353.607c0 30.738 24.92 55.658 55.657 55.658z"></path>
			      </g>
			    </svg>
				CONTROLE DE ESTOQUE
			</h2>

			<DashboardTableContainer>
				<ProductSectionSubtitle>
					<svg
				      xmlns="http://www.w3.org/2000/svg"
				      width="24"
				      height="24"
				      fill="#ff8b2b"
				      stroke="#ff8b2b"	
				      viewBox="0 0 24 24"
				    >
				      <path d="M21.5 12l-.679-8.821L12 2.5 2.5 12l9.5 9.5zm-6.921-5.564a2.111 2.111 0 110 2.985 2.109 2.109 0 010-2.985z"></path>
				    </svg>
					PRODUTOS CADASTRADOS
				</ProductSectionSubtitle>
				<DashboardTable products={products} isChangeLogTable={false}/>
			</DashboardTableContainer>

			<ProductsLog>
				<ProductSectionSubtitle>
					<svg
				      xmlns="http://www.w3.org/2000/svg"
				      width="24"
				      height="24"
				      fill="#ff8b2b"
				      stroke="#ff8b2b"
				      viewBox="0 0 24 24"
				    >
				      <path d="M20.548 3.452a1.542 1.542 0 010 2.182l-7.636 7.636-3.273 1.091 1.091-3.273 7.636-7.636a1.542 1.542 0 012.182 0zM4 21h15a1 1 0 001-1v-8a1 1 0 00-2 0v7H5V6h7a1 1 0 000-2H4a1 1 0 00-1 1v15a1 1 0 001 1z"></path>
				    </svg>
					ALTERAR PRODUTOS
				</ProductSectionSubtitle>
				<SelectProduct onChange={handleSelectProduct}>
					<option>Selecione um produto</option>
					{products.map((product) => (
						<option value={product.name} key={product.id}>({product.id}) {product.name}</option>
					))}
				</SelectProduct>
				

				<ProductControlContainer>
					<label htmlFor="supplyAmount">
						Estoque Dísponivel:
						<input id="supplyAmount" type="text" value={selectedProduct?.amount || 0} onChange={handleUpdateSupplyAmount}/>
					</label>
					
					<label htmlFor="price">
						Preço do produto:
						<span>R$</span>
						<input id="price" type="text" value={selectedProduct?.price || 0.00} onChange={handleUpdateProductPrice}/>
					</label>
					
				</ProductControlContainer>
			</ProductsLog>

			<Button onClick={handleSaveChanges}>
				SALVAR ALTERAÇÕES
			</Button>
		</Container>
	)
}