const express = require('express');
const app = express();
const port = 3001;

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('In the OTHER middleware');
//   res.send('<h1>Hello from Express!</h1>');
// });
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In the add product middleware');
    res.send('<h1>Add Product!</h1>');
  });

app.use('/', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>Hello from Express!</h1>');
  });

app.listen(port, () => console.log(`Listening on port: ${port}`));