const { Router } = require('express');

const user = require('./user.route');

const routes = new Router();

routes.use('/users', user);

module.exports = routes;
