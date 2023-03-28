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
		const { user_id, order_details } = request.body;

		const order = await UserOrdersRepository.create(user_id, order_details);

		response.json(order)
	}
}

module.exports = new UserOrdersController();