const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productsCtrl');

router.get('/', getProducts);

module.exports = router;