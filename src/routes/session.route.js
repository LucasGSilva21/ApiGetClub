const { Router } = require('express');

const SessionController = require('../controllers/sessionController');

const routes = new Router();

routes.post('/', SessionController.login);

module.exports = routes;
