const http = require('http');
const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log('In the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In the OTHER middleware');
  res.sendStatus(200);
});

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port: ${port}`));