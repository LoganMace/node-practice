const express = require('express');
const router = express.Router();
const { getProducts, getIndexPage, getCartPage, getCheckoutPage } = require('../controllers/shopCtrl');

router.get('/', getIndexPage);
router.get('/products', getProducts);
router.get('/cart', getCartPage);
router.get('/checkout', getCheckoutPage);

module.exports = router;