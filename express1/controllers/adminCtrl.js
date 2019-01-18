const Product = require('../models/productMdl');

const getAddProductPage = (req, res, next) => {
  res.render('admin/add-product', { 
    pageTitle: 'Add Product', 
    path: '/admin/add-product', 
    formsCSS: true, 
    productCSS: true,
    activeAddProduct: true 
  })
};

const addProduct = (req, res, next) => {
  // console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

const getAdminProductsPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', { 
      products, 
      pageTitle: 'Admin Products', 
      path: '/admin/products'
    });
  });
};

module.exports = {
  getAddProductPage,
  addProduct,
  getAdminProductsPage
};