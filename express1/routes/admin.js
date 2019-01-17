const express = require('express');
const router = express.Router();
const { getAddProductPage, addProduct } = require('../controllers/productsCtrl');

router.get('/add-product', getAddProductPage);

router.post('/add-product', addProduct);

module.exports = router;