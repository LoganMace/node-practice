const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3001;

const { get404 } = require('./controllers/error');

// for handlebars
// const expressHbs = require('express-handlebars');

// for EJS
app.set('view engine', 'ejs');

// for handlebars
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'hbs');

// for pug
// app.set('view engine', 'pug');

app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req, res, next) => {
//   console.log('This always runs!');
//   next();
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

app.listen(port, () => console.log(`Listening on port: ${port}`));