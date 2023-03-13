const db = require("../../database/index");

class UserRepository {
	async findUser(username) {
		const [row] = await db.query(`
			SELECT * FROM users
			WHERE username = $1
		`, [username])

		return row;
	}

	async save(username, password) {
		const [row] = await db.query(`
			INSERT INTO users(username, password)
			VALUES($1, $2)
			RETURNING *
		`, [username, password]);
	}
};

module.exports = new UserRepository();