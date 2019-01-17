
const products = [];

const getAddProductPage = (req, res, next) => {
  res.render('add-product', { 
    pageTitle: 'Add Product', 
    path: '/admin/add-product', 
    formsCSS: true, 
    productCSS: true,
    activeAddProduct: true 
  })
};

const addProduct = (req, res, next) => {
  // console.log(req.body);
  products.push({title: req.body.title});
  res.redirect('/');
};

const getProducts = (req, res, next) => {
  // pug
  // res.render('shop', {products, pageTitle: 'Shop', path: '/'});

  // handlebars or ejs
  res.render('shop', { 
    products, 
    pageTitle: 'Shop', 
    path: '/', 
    hasProducts: (products.length > 0), 
    productCSS: true, 
    activeShop: true 
  });
};

module.exports = {
  getAddProductPage,
  addProduct,
  getProducts
};