import { Link, ButtonContent } from './styles.js'

import userImg from '../../../assets/user.svg'

export function AuthButton() {
	return (
		<Link href="#">
			<img src={userImg} />
			<ButtonContent>
				<small>Minha conta</small>
				<strong>Entrar</strong>
				{/*<small>Sair</small> QUANDO ROOT TIVER LOGADO
				<strong>root</strong>*/}
			</ButtonContent>
		</Link>
	)
}