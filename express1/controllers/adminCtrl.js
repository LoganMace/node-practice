const Product = require('../models/productMdl');

const getAddProductPage = (req, res, next) => {
  res.render('admin/edit-product', { 
    pageTitle: 'Add Product', 
    path: '/admin/add-product',
    editing: false
  })
};

const addProduct = (req, res, next) => {
  // console.log(req.body);
  const {title, imageURL, price, description} = req.body;
  const product = new Product(title, imageURL, price, description);
  product.save();
  res.redirect('/');
};

const getEditProductPage = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode) {
    res.redirect('/');
  }
  const prodId = req.params.id;
  Product.findById(prodId, (product) => {
    if(!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', { 
      pageTitle: 'Edit Product', 
      path: '/admin/edit-product',
      editing: editMode,
      product
    });
  });
};

const postEditProduct = (req, res, next) => {
  
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
  getAdminProductsPage,
  getEditProductPage,
  postEditProduct
};