const { Router } = require('express');
const ProductsController = require('./app/Controllers/ProductsController')
const UsersController = require('./app/Controllers/UsersController');

const router = Router();

//user-acess

router.get('/products', ProductsController.index);
router.get('/products/:id', ProductsController.show);
router.post('/login', UsersController.authUser);
router.post('/register', UsersController.createUser)
router.patch('/products/:id', ProductsController.productStockHandler);
router.patch('/products/liked/:id', ProductsController.updateProductLike);
//dashboard
router.patch('/dashboard/:id', ProductsController.update)



module.exports = router;