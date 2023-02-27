import axios from 'axios';

export const api = axios.create({
	//Instance Configuration
	baseURL: 'http://192.168.15.12:8080',
	headers: {
		Accept: 'application/json',
	}
}) 