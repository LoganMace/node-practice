const express = require('express');
const router = express.Router();
const { getAddProductPage, addProduct, getAdminProductsPage, getEditProductPage } = require('../controllers/adminCtrl');

router.get('/add-product', getAddProductPage);
router.get('/products', getAdminProductsPage);
router.post('/add-product', addProduct);
router.get('/edit-product/:id', getEditProductPage);

module.exports = router;