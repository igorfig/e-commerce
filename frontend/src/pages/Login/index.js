import { useState } from 'react';
import { Container, Form, InputContainer, SubmitLogin, RegisterLink } from './styles';
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
					<InputContainer hasContent={username ? true : false}>
						<input type="text" id="user-id" onChange={handleGetUsername}/>
						<label htmlFor="user-id">Usuário, e-mail ou CPF</label>
					</InputContainer>
					<InputContainer hasContent={password ? true : false}>
						<input type="password" id="password" onChange={handleGetPassword}/>
						<label htmlFor="password">Senha</label>
					</InputContainer>

					<SubmitLogin onClick={(event) => { 
						event.preventDefault();
						login(username, password);
					}}>
						<img src={loginEnterImg} />
						ENTRAR
					</SubmitLogin>	

					<RegisterLink>É novo por aqui? <a href="/cadastro">CADASTRE-SE</a></RegisterLink>
				</Form>
			</Container>
		</>

	)
}