const express = require('express');
const router = express.Router();
const { getProducts, getIndexPage, getCartPage, getCheckoutPage, getOrdersPage } = require('../controllers/shopCtrl');

router.get('/', getIndexPage);
router.get('/products', getProducts);
router.get('/cart', getCartPage);
router.get('/checkout', getCheckoutPage);
router.get('/orders', getOrdersPage);

module.exports = router;