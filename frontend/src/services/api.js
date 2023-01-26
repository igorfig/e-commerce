import axios from 'axios';

export const api = axios.create({
	//Instance Configuration
	baseURL: 'http://localhost:8080',
	headers: {
		Accept: 'application/json',
	}
}) 