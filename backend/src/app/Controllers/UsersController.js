const jwt = require('jsonwebtoken');
const UsersRepository = require('../Repositories/UsersRepository');

class UserController {
	async authUser(request, response) {
		const { username, password } = request.body;
		const user = await UsersRepository.findUser(username);

		if(!user) {
			return response.sendStatus(404);
		}

		if(username.trim().toLowerCase() === user.username.trim().toLowerCase() && password === user.password) {
			const token = jwt.sign({ username }, 'secret_key');
			response.json({ token, user: {
				id: user.id,
				username: user.username
			}})
		} else {
			response.status(401).json({ message: "Credenciais inválidas" });
		}
	}

	async createUser(request, response) {
		const { username, password } = request.body;

		const isRegistered = await UsersRepository.findUser(username);

		if(isRegistered) {
			response.sendStatus(400).json({ message: "O usuário já está cadastro"});
		} else {
			if(username && password) {
				const user = await UsersRepository.save(username, password);

				response.sendStatus(201).json(user);
			}
		}
	}
}

module.exports = new UserController();