const routes = require('express').Router();
const myController = require('../controllers/index');

routes.get('/', myController.awesomeFunction, myController.twiceAsAwesomeFunction);

module.exports = routes;