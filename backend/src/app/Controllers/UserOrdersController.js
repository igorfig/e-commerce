const UserOrdersRepository = require('../Repositories/UserOrdersRepository');

class UserOrdersController {
	async index(request, response) {
		const userId = request.query.userId;
		const orders  = await UserOrdersRepository.findOrders(userId);
		response.json(orders);
	}

	async show(request, response) {
		const { userId } = request.params;
		const { orderId } = request.query;
		const order = await UserOrdersRepository.findOrder(userId, orderId);
		response.json(order);
	}

	async store(request, response) {
		const { user_id, orders_details } = request.body;

		const order = await UserOrdersRepository.create(JSON.parse(user_id), JSON.stringify(orders_details));

		response.status(201).json(order);
	}
}

module.exports = new UserOrdersController();