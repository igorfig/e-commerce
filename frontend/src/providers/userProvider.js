import { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({});
	
export function UserProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		const token = Cookies.get('token');
		const user = Cookies.get('user');

		if(token) {
			setIsLoggedIn(true);
			setUser(() => user && JSON.parse(user));
		}
	}, []);

	const register = async (username, password) => {
		const response = await api.post('register', {
				username,
				password
			}, 
			{ 
				headers: { 'Content-Type': 'application/json' } 
			}
		);

		return response.data;
	}

	const login = async (username, password) => {
		try {
			const response = await api.post('/login', {
					username,
					password
				}, 
				{ 
					headers: { 'Content-Type': 'application/json' }
				}
			);

			const { token, user } = response.data;
			Cookies.set('token', token);
			Cookies.set('user', JSON.stringify(user));
			setUser(user);
			setIsLoggedIn(true);
			navigate('/');
		} catch {
			alert('Credenciais inválidas')
		}
	}

	const logout = () => {
		Cookies.remove('token');
		Cookies.remove('user');
		Cookies.remove('favorites');
		setIsLoggedIn(false);
		setUser({});
	}

	return (
		<UserContext.Provider value={{ isLoggedIn, user, register, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}