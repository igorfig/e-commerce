const { Router } = require('express');
const ProductsController = require('./app/Controllers/ProductsController');
const FavoritesProductsController = require('./app/Controllers/FavoritesProductsController.js');
const UsersController = require('./app/Controllers/UsersController');
const UserOrdersController = require('./app/Controllers/UserOrdersController');
const router = Router();

//user-acess

router.get('/products', ProductsController.index);
router.get('/products/:id', ProductsController.show);
router.post('/login', UsersController.authUser);
router.post('/register', UsersController.createUser);

router.get('/user/favorites/:userId', FavoritesProductsController.index);
router.get('/user/favorites/product/:id', FavoritesProductsController.show);
router.post('/user/favorites/:userId', FavoritesProductsController.store);
router.delete('/user/favorites/:userId', FavoritesProductsController.delete);


router.get('/user/orders', UserOrdersController.index);
router.get('/user/orders/:userId', UserOrdersController.show);
router.post('/user/orders', UserOrdersController.store);


router.patch('/products/:id', ProductsController.productStockHandler);
router.patch('/products/liked/:id', ProductsController.updateProductLike);
//dashboard
router.patch('/dashboard/:id', ProductsController.update)



module.exports = router;