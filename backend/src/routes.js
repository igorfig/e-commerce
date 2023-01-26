const { Router } = require('express');
const ProductsController = require('./app/Controllers/ProductsController')

const router = Router();

//user-acess

router.get('/products', ProductsController.index);
router.get('/products/:id', ProductsController.show);
router.patch('/products/:id', ProductsController.update);

//dashboard
router.post('/dashboard', ProductsController.store);
router.delete('/dashboard/:id', ProductsController.delete);



module.exports = router;