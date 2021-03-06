const express = require('express');
const router = express.Router();
const { getProducts, getIndexPage, getCartPage, getCheckoutPage, getOrdersPage, getProductDetails, postCart } = require('../controllers/shopCtrl');

router.get('/', getIndexPage);
router.get('/products', getProducts);
router.get('/products/:id', getProductDetails);
router.get('/cart', getCartPage);
router.post('/cart', postCart);
router.get('/checkout', getCheckoutPage);
router.get('/orders', getOrdersPage);

module.exports = router;