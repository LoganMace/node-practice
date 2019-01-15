const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3001;
const app = express();

const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRouter);
app.use(homeRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));