const db = require("../../database/index");

class ProductsRepository {
  async getAllProducts() {
    const rows = await db.query(`SELECT * FROM products`);

    return rows;
  }

  async findProductById(id) {
    const [row] = await db.query(`
      SELECT * FROM products
      WHERE id = $1
    `, [id])

    return row;
  }

  async updateProductValues(productAmount, productPrice, id) {
    const [row ] = await db.query(`
      UPDATE products
      SET amount = $1, price = $2
      WHERE id = $3
    `, [productAmount, productPrice, id]);

    return row;
  }

  async updateProductStockAmount(productAmount, id) {
    const [row] = await db.query(`
      UPDATE products
      SET amount = $1
      WHERE id = $2
    `, [productAmount, id]);
    return row;
  }
}

module.exports = new ProductsRepository();
