const { Router } = require('express');

const user = require('./user.route');
const session = require('./session.route');
const service = require('./service.route');
const star = require('./star.route');

const routes = new Router();

routes.use('/user', user);
routes.use('/auth', session);
routes.use('/service', service);
routes.use('/star', star);

module.exports = routes;
