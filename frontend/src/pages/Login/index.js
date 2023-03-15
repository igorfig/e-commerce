import { useState } from 'react';
import { Container, Form, InputContainer, SubmitLogin } from './styles';
import loginEnterImg from '../../assets/label/login-enter.svg';
import { useAuth } from '../../hooks/useAuth';


export function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useAuth();


	const handleGetUsername = (event) => setUsername(event.target.value);
	const handleGetPassword = (event) => setPassword(event.target.value);
	return (
		<>
			<Container>
				<h2>INICIAR SESSÃO</h2>

				<Form>
					<InputContainer>
						<input type="text" id="user-id" onChange={handleGetUsername}/>
						<label htmlFor="user-id">Usuário, e-mail ou CPF</label>
					</InputContainer>
					<InputContainer>
						<input type="password" id="password" onChange={handleGetPassword}/>
						<label htmlFor="password">Senha</label>
					</InputContainer>

					<SubmitLogin onClick={(event) => { 
						event.preventDefault();
						login(username, password)
					}}>
						<img src={loginEnterImg} />
						ENTRAR
					</SubmitLogin>	
				</Form>
			</Container>
		</>

	)
}