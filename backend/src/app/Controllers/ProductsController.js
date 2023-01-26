const ProductsRepository = require('../Repositories/ProductsRepository')

class ProductsController {
  async index(request, response) {
    const products = await ProductsRepository.getAllProducts();

    response.json(products);
  }

  async show(request, response) {
    const { id } = request.params;

    const product = await ProductsRepository.findProductById(id);

    response.json(product);
  }
  
  async store(request, response) {
    const newProduct = request.body;

    const product = await ProductsRepository.save(newProduct);

    response.json(product);
  }

  async update(request, response) { // Product Amount update on get on cart
    const { command } = request.query; // decrement = When the product get o ncart ,increment = When the product get off cart
    const cartAmount = Number(request.query.cartAmount)
    const { id } = request.params;
    const { amount } = await ProductsRepository.findProductById(id);

    const productAmount = command === 'decrement' ? amount - cartAmount : amount + cartAmount;

    console.log(productAmount);
      
    const product = await ProductsRepository.updateProductAmount(productAmount, id);

    response.sendStatus(200).json(product);
    
  }

  async delete(request, response) {
    const { id } = request.params;

    await ProductsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ProductsController();