const FavoriteProductsRepository = require('../Repositories/FavoritesProductsRepository');
const UsersRepository = require('../Repositories/UsersRepository');

class FavoriteProductsController {
	async index(request, response) {
		const { userId } = request.params;
		
		const products = await FavoriteProductsRepository.getAllFavoriteProducts(userId);

		response.json(products);
	}	

	async show(request, response) {
		const { id } = request.params;
		const product = await FavoriteProductsRepository.getFavoriteProductById(id);
		response.json(product);
	}

	async store(request, response) {
		const { userId } = request.params;
	    const { username } = request.query;
	    const product = request.body;
	   
	    const user = await UsersRepository.findUserByUsername(username);
	    const favoriteProduct = await FavoriteProductsRepository.getAllFavoriteProducts(userId, product.id);

	    const productIndex = favoriteProduct.findIndex(data => data.product.id === product.id);

	    if(user) {
	    	if(productIndex === -1) {
	    		const createdFavoriteProduct = await FavoriteProductsRepository.create(userId, JSON.stringify(product));	
	    		response.json(favoriteProduct);
	    	} else {
	    		response.sendStatus(409).end();
	    	}
	    	
	    }
	  }

	  async delete(request, response) {
	  	const { userId } = request.params;
	  	const { id } = request.query;

	  	await FavoriteProductsRepository.delete(userId, id);

	  	response.sendStatus(200);
	  }
}	

module.exports = new FavoriteProductsController();