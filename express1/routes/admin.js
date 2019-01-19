const express = require('express');
const router = express.Router();
const { getAddProductPage, addProduct, getAdminProductsPage, getEditProductPage, postEditProduct } = require('../controllers/adminCtrl');

router.get('/add-product', getAddProductPage);
router.get('/products', getAdminProductsPage);
router.post('/add-product', addProduct);
router.get('/edit-product/:id', getEditProductPage);
router.post('/edit-product', postEditProduct);

module.exports = router;