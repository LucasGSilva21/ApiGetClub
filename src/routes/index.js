const { Router } = require('express');

const user = require('./user.route');
const session = require('./session.route');
const chat = require('./chat.route');

const routes = new Router();

routes.use('/users', user);
routes.use('/auth', session);
routes.use('/chat', chat);

module.exports = routes;
