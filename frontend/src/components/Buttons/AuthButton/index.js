import { useRef, useEffect } from 'react';
import { Link, ButtonContent } from './styles.js'

import { useAuth } from '../../../hooks/useAuth';
import userImg from '../../../assets/label/user.svg'

export function AuthButton() {
	const { isLoggedIn, user, logout } = useAuth();
	const authBtnRef = useRef(null);
	
	useEffect(() => {
		authBtnRef.current && authBtnRef.current.addEventListener('click', logout);

		return () => authBtnRef.current && authBtnRef.current.removeEventListener('click', logout);
	}, [isLoggedIn])

	return (
		<Link href="/login" ref={authBtnRef}>
			<img src={userImg} />
			<ButtonContent>
				{isLoggedIn ? (
					<>
						<small>Sair</small>
						<strong>{user?.username}</strong>
					</>
				) : 
				(
					<>
						<small>Minha conta</small>
						<strong>Entrar</strong>
					</>
				)}
			</ButtonContent>
		</Link>
	)
}

