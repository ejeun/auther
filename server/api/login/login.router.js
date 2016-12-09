'use strict';

var router = require('express').Router();
var User = require('../users/user.model');
// var HttpError = require('../../utils/HttpError');

router.post('/', function (req, res, next) {
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.redirect('/signup');
    } else {
      req.session.user = user;
      res.sendStatus(204);
    }
  })
  .catch(next);
});

router.post('/signup', function (req, res, next){
  User.create(req.body)
  .then(newUser => {
    req.session.user = newUser;
    res.sendStatus(201);
  })
  .catch(next);
})

router.get('/logout', function (req, res, next){
  req.session.user = null;
  res.sendStatus(200);
})

module.exports = router;
