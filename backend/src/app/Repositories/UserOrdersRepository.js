const db = require('../../database/');

class UserOrdersRepository {
	async findOrders(userId) {
		const rows = await db.query(`
			SELECT * FROM orders
			WHERE user_id = $1
		`, [userId])

		return rows;
	}

	async findOrder(userId, orderId) {
		const [row] = await db.query(`
			SELECT * FROM orders
			WHERE user_id = $1 AND id = $2
		`, [userId, orderId]);

		return row;
	}

	async create(userId, orderDetails) {
		const [row] = await db.query(`
			INSERT INTO orders(user_id, order_details)
			VALUES($1, $2)
			RETURNING *
		`, [userId, orderDetails])

		return row;
	}
}

module.exports = new UserOrdersRepository();