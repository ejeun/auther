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
      res.status(401).send('Please sign up!');
    } else {
      req.session.userId = user.id;

      res.status(204).send(user);
    }
  })
  .catch(next);
});

module.exports = router;
