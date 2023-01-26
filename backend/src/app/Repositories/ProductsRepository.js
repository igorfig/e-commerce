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

  async save(newProduct) {
    const [row] = await db.query(`
        INSERT INTO products(product, amount, price, icon_reference)
        VALUES($1, $2, $3, $4)
        RETURNING *
      `, [newProduct.product, newProduct.amount, newProduct.price, newProduct.icon_reference]);

    return row;
  }

  async updateProductAmount(productAmount, id) {
    const [row] = await db.query(`
      UPDATE products
      SET amount = $1
      WHERE id = $2
    `, [productAmount, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM products
      WHERE id = $1
    `, [id]);

    return deleteOp
  }

}

module.exports = new ProductsRepository();
