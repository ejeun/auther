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
      res.status(204).send(user);
    }
  })
  .catch(next);
});

router.post('/signup', function (req, res, next){
  User.create(req.body)
  .then(newUser => {
    req.session.user = newUser;
    res.status(201).send(newUser);
  })
  .catch(next);
})

module.exports = router;
