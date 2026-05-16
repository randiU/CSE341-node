const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get(
  '/',
  indexController.awesomeFunction,
  indexController.twiceAsAwesomeFunction
);

router.use('/contacts', require('./contacts'));
router.use('/api-docs', require('./swagger'));

module.exports = router;