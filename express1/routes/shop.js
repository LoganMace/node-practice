const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  // console.log('In the middleware');
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  const products = adminData.products;
  // pug
  // res.render('shop', {products, pageTitle: 'Shop', path: '/'});
  
  // handlebars
  res.render('shop', {products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0});
});

module.exports = router;