import { Container } from './styles.js'

import userImg from '../../../assets/user.svg'

export function AuthButton() {
	return (
		<Container>
			<a href="#">
				<img src={userImg} />
				<span>
					<small>Minha conta</small>
					<strong>Entrar</strong>
					{/*<small>Sair</small> QUANDO ROOT TIVER LOGADO
					<strong>root</strong>*/}
				</span>
			</a>
		</Container>
	)
}