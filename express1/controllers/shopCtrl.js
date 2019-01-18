const Product = require('../models/productMdl');

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { 
      products, 
      pageTitle: 'All Products', 
      path: '/products'
    });
  });
};

const getIndexPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', { 
      products, 
      pageTitle: 'Shop', 
      path: '/'
    });
  });
};

const getCartPage = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

const getCheckoutPage = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

module.exports = {
  getProducts,
  getIndexPage,
  getCartPage,
  getCheckoutPage
};