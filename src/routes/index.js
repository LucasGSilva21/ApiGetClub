const { Router } = require('express');

const user = require('./user.route');
const session = require('./session.route');

const routes = new Router();

routes.use('/users', user);
routes.use('/auth', session);

module.exports = routes;
