const express = require('express');
const router = express.Router();
const { getAddProductPage, addProduct, getAdminProductsPage } = require('../controllers/adminCtrl');

router.get('/add-product', getAddProductPage);
router.get('/products', getAdminProductsPage);
router.post('/add-product', addProduct);

module.exports = router;