const express = require('express');
const bodyParser = require('body-parser');
// for handlebars
const expressHbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3001;

app.set('views', 'views');
// for handlebars
app.engine('hbs', expressHbs);
app.set('view engine', 'hbs');
// for pug
app.set('view engine', 'pug');


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req, res, next) => {
//   console.log('This always runs!');
//   next();
// });

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(port, () => console.log(`Listening on port: ${port}`));