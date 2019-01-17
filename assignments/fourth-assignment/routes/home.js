const express = require('express');
const router = express.Router();
const {users} = require('./users');

router.get('/', (req, res, next) => {
  res.render('home', {
    pageTitle: 'Home',
    path: '/',
    users
  });
});

module.exports = router;