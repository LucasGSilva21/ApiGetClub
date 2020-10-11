const { Router } = require('express');

const ChatController = require('../controllers/chatController');

const routes = new Router();

routes.get('/', ChatController.getAll);

module.exports = routes;