import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, InputContainer, RegisterButton, LoginLink } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';

export function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [cpf, setCpf] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [passwordValidate, setPasswordValidate] = useState('');
	const [isPasswordValid, setIsPasswordValid] = useState();


	const { register } = useAuth();
	const navigate = useNavigate();

	const handleUpdateUsername = (event) => setUsername(event.target.value);
	const handleUpdatePassword = (event) => setPassword(event.target.value);

	const handleValidatePassword = (event) => password === event.target.value ? setIsPasswordValid(true) : setIsPasswordValid(false);

	const handleFormatCpf = (event) => {
		let formattedCpf = event.target.value.replace(/\D/g, '');
	    formattedCpf = formattedCpf.replace(/^(\d{3})(\d)/g, '$1.$2');
	    formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, '$1.$2');
	    formattedCpf = formattedCpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
	    setCpf(formattedCpf);
	}

	const handleFormatBirthDate = (event) => {
		 let formattedDate = event.target.value.replace(/\D/g, '');
	    formattedDate = formattedDate.replace(/^(\d{2})(\d)/g, '$1/$2');
	    formattedDate = formattedDate.replace(/(\d{2})(\d)/, '$1/$2');
	    setBirthDate(formattedDate);
	}


	const handleFormatPhone = (event) => {
		let formattedPhone = event.target.value.replace(/\D/g, '');
	    formattedPhone = formattedPhone.replace(/^(\d{2})(\d)/g, '($1) $2');
	    formattedPhone = formattedPhone.replace(/(\d)(\d{4})$/, '$1-$2');
	    setPhone(formattedPhone);
	}


	const handleSubmit = (event) => {
		if(username && password) {
			
			try {
				if(isPasswordValid){
					register(username, password);
					navigate("/login");
				} else {
					event.preventDefault();
					toast.error('As senhas não coincidem.');
				}
				
			} catch(err) {
				console.log(err.message);
			}
		} 
	}
	return (
		<Container>
			<h2>CRIAR CONTA</h2>

			<Form>
				<InputContainer hasContent={username ? true : false}>
					<input type="text" id="username" required onChange={handleUpdateUsername}/>
					<label htmlFor="username">Nome de usuário*</label>
				</InputContainer>

				<InputContainer hasContent={cpf ? true : false}>
					<input type="text" id="cpf" required value={cpf} onChange={handleFormatCpf} maxLength={14}/>
					<label htmlFor="cpf">CPF*</label>
				</InputContainer>

				<InputContainer hasContent={birthDate ? true : false}>
					<input type="text" id="date-of-birth" required value={birthDate} onChange={handleFormatBirthDate} maxLength={10}/>
					<label htmlFor="date-of-birth">Data de nascimento*</label>
				</InputContainer>

				<InputContainer hasContent={phone ? true : false}>
					<input type="tel" id="phone-number" required value={phone} onChange={handleFormatPhone} maxLength={15}/>
					<label htmlFor="phone-number">Celular*</label>
				</InputContainer>

				<InputContainer className="email" onChange={(event) => setEmail(event.target.value)} hasContent={email ? true : false}>
					<input type="email" id="email" required/>
					<label htmlFor="email">E-mail*</label>
				</InputContainer>

				<InputContainer hasContent={password ? true : false}>
					<input type="password" id="password" required onChange={handleUpdatePassword} />
					<label htmlFor="password">Crie sua senha*</label>
				</InputContainer>


				<InputContainer onChange={(event) => setPasswordValidate(event.target.value)} hasContent={passwordValidate ? true : false}>
					<input type="password" id="confirm-password" required onChange={handleValidatePassword}/>
					<label htmlFor="confirm-passwor">Confirme sua senha*</label>
				</InputContainer>

				<RegisterButton onClick={handleSubmit}>CADASTRAR</RegisterButton>
				
				<LoginLink>Já possui cadastro? <a href="/login">ENTRAR</a></LoginLink>
			</Form>
		</Container>
	)	
}