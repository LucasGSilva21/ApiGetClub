const { Router } = require('express');

const user = require('./user.route');
const session = require('./session.route');
const chat = require('./chat.route');
const service = require('./service.route');

const routes = new Router();

routes.use('/users', user);
routes.use('/auth', session);
routes.use('/chat', chat);
routes.use('/service', service);

module.exports = routes;
