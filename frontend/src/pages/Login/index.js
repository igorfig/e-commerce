import { Container, Form, InputContainer, SubmitLogin } from './styles';
import loginEnterImg from '../../assets/label/login-enter.svg'

export function Login() {
	return (
		<>
			<Container>
				<h2>INICIAR SESSÃO</h2>

				<Form>
					<InputContainer>
						<input type="text" id="user-id"/>
						<label htmlFor="user-id">Usuário, e-mail ou CPF</label>
					</InputContainer>
					<InputContainer>
						<input type="password" id="password"/>
						<label htmlFor="password">Senha</label>
					</InputContainer>

					<SubmitLogin>
						<img src={loginEnterImg} />
						ENTRAR
					</SubmitLogin>	
				</Form>
			</Container>
		</>

	)
}