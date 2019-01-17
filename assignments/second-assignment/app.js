const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log('Always hits');
  next();
});

app.use('/users', (req, res, next) => {
  res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Home</h1>');
});

app.listen(port, () => console.log(`Listening on port: ${port}`));