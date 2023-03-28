import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';
import { Container, SearchAddressContainer, UserAddressResult } from './styles';
import { api } from '../../services/api';
import mapMarkerImg from '../../assets/layout/mapMarker.svg'

export function UserAddress() {
	const cepRegex = /^\d{5}-\d{3}$/;

	const [cep, setCep] = useState('');
	const [isCepValid, setIsCepValid] = useState(false);
	const [userAddress, setUserAddress] = useState();

	const handleCepChange = (event) => {
	  let value = event.target.value;
	  value = value.replace(/\D/g, ''); // Remove tudo que não for dígito
	  value = value.slice(0, 8); // Mantém apenas os 8 primeiros dígitos

	  if (value.length > 5) {
	    value = value.slice(0, 5) + '-' + value.slice(5);
	  }

	  setCep((prevState) => prevState = '');
	  setCep(value);
	  setIsCepValid(cepRegex.test(value));
	};

	const handleSearchCep = async () => {
		if(isCepValid) {
			const address = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
			const data = address.data
			if(data.uf) {
				const { bairro, localidade, logradouro, uf } = data;

				setUserAddress({
					cep,
					bairro,
					localidade,
					logradouro,
					uf
				})
			} else {
				setIsCepValid(false);
				setUserAddress({});
			}
		} else {
			toast.error('O CEP digitado é inválido!', {
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	} 

	useEffect(() => { 
		Cookies.set('address', JSON.stringify(userAddress ? userAddress : {}));
		return () => Cookies.remove('address');
	}, [userAddress]); 

	const handleKeyDown = (event) => {
		if(event.key === 'Enter') {
			handleSearchCep();
		}
	}
	return (
		<Container>
			<ToastContainer
				position="top-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<h2>
				<img src={mapMarkerImg} />
				SELECIONE O ENDEREÇO PARA ENTREGA
			</h2>

			<SearchAddressContainer>
				<div>
					<label htmlFor="cep" className="sr-only">Inserir CEP</label>
					<input 
						type="text" 
						value={cep} 
						onChange={handleCepChange}
						onKeyDown={handleKeyDown} 
						placeholder="Inserir CEP" id="cep"
						pattern="\d{5}-\d{3}" 
						maxLength="9"
						autoComplete="off" />
					<button onClick={handleSearchCep}>OK</button>
				</div>
				<a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank">Não sei meu CEP</a>
			</SearchAddressContainer>

			{userAddress?.uf && (
				<UserAddressResult>
					<strong>Entregar em: </strong>
					<span>
						{userAddress.logradouro}
					</span>

					<span>
						{userAddress.bairro}, {userAddress.localidade} - {userAddress.uf}
					</span>

					<span>
						{userAddress.cep}
					</span>
				</UserAddressResult>
			)}
		</Container>
	)
}