import { Container, Form, InputContainer, RegisterButton, LoginLink } from './styles';

export function Register() {
	return (
		<Container>
			<h2>CRIAR CONTA</h2>

			<Form>
				<InputContainer>
					<input type="text" id="full-name" required/>
					<label htmlFor="full-name">Nome Completo*</label>
				</InputContainer>

				<InputContainer>
					<input type="text" id="cpf" required/>
					<label htmlFor="cpf">CPF*</label>
				</InputContainer>

				<InputContainer>
					<input type="text" id="date-of-birth" required/>
					<label htmlFor="date-of-birth">Data de nascimento*</label>
				</InputContainer>

				<InputContainer>
					<input type="tel" id="phone-number" required/>
					<label htmlFor="phone-number">Celular*</label>
				</InputContainer>

				<InputContainer className="email">
					<input type="email" id="email" required/>
					<label htmlFor="email">E-mail*</label>
				</InputContainer>

				<InputContainer>
					<input type="password" id="password" required/>
					<label htmlFor="password">Crie sua senha*</label>
				</InputContainer>


				<InputContainer>
					<input type="password" id="password" required/>
					<label htmlFor="password">Confirme sua senha*</label>
				</InputContainer>

				<RegisterButton>CADASTRAR</RegisterButton>
				
				<LoginLink>Já possui cadastro? <a href="/login">ENTRAR</a></LoginLink>
			</Form>
		</Container>
	)	
}