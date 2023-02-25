const { Router } = require('express');
const ProductsController = require('./app/Controllers/ProductsController')

const router = Router();

//user-acess

router.get('/products', ProductsController.index);
router.get('/products/:id', ProductsController.show);
router.patch('/products/:id', ProductsController.productStockHandler);

//dashboard
router.patch('/dashboard/:id', ProductsController.update)



module.exports = router;