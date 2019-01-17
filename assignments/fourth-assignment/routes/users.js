const express = require('express');
const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Users',
    path: '/users'
  });
});

router.post('/users', (req, res, next) => {
  users.push(req.body);
  res.status(200);
});

module.exports = {
  router,
  users
};