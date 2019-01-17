const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Listening on port: ${port}`));