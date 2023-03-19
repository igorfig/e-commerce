const db = require("../../database/index");

class FavoriteProductsRepository {
	async getAllFavoriteProducts(userId) {
		const rows = await db.query(`
			SELECT * FROM favorites
			WHERE user_id = $1
		`, [userId])

		return rows;
	}

	async getFavoriteProductById(id) {
		const rows = db.query(`
			SELECT * FROM favorites
			WHERE id = $1
		`, [id]);

		return rows;
	}

	async create(userId, product) {
	    const [row] = await db.query(`
	      INSERT INTO favorites (user_id, product) 
	      VALUES ($1, $2)
	      RETURNING *
	    `, [userId, product]);

	    return row;
	}

	async delete(userId, id) {
		const deleteOp = await db.query(`
			DELETE FROM favorites 
			WHERE user_id = $1
			AND product->>'id' = $2
		`, [userId, id]);
	}
}

module.exports = new FavoriteProductsRepository();