const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', (req, res, next) => {
//   console.log('This always runs!');
//   next();
// });

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(port, () => console.log(`Listening on port: ${port}`));