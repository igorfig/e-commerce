const ProductsRepository = require('../Repositories/ProductsRepository');

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

  async productStockHandler(request, response) { // Product Amount update on get on cart
      const { id } = request.params;
      const { amount } = await ProductsRepository.findProductById(id);
      const { userCartAction } = request.query;
      const cartAmount = Number(request.query.cartAmount);

      if(cartAmount > 0) {
        const stock = userCartAction === 'add' ? amount - cartAmount : amount + cartAmount;
        const product = await ProductsRepository.updateProductStockAmount(stock, id);
        response.sendStatus(200).json(product);
      }
  }

  async update(request, response) {
    const { id } = request.params;
    const { productAmount, productPrice } = request.body;

    if(!(productAmount && productPrice)) {
      return response.sendStatus(400);
    }
    
    const product = await ProductsRepository.updateProductValues(productAmount, productPrice, id);
    response.sendStatus(200).json(product);
  }

  async updateProductLike(request, response) {
    const { id } = request.params;
    const { liked } = request.query;
    
    const product = await ProductsRepository.likeProduct(liked, id);

    response.sendStatus(200).json(product)
  }
}

module.exports = new ProductsController();