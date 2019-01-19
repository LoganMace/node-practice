const Product = require('../models/productMdl');
const Cart = require('../models/cart');

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

const postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

const getOrdersPage = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

const getCheckoutPage = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

const getProductDetails = (req, res, next) => {
  const prodId = req.params.id;
  Product.findById(prodId, (product) => {
    res.render('shop/product-detail', {
      product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

module.exports = {
  getProducts,
  getIndexPage,
  getCartPage,
  getCheckoutPage,
  getOrdersPage,
  getProductDetails,
  postCart
};