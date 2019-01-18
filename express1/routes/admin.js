const express = require('express');
const router = express.Router();
const { getAddProductPage, addProduct } = require('../controllers/adminCtrl');

router.get('/add-product', getAddProductPage);
// router.get('/products', getAdminProductPage);
router.post('/add-product', addProduct);

module.exports = router;