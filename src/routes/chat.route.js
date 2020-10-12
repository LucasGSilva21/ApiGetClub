const { Router } = require('express');

const ChatController = require('../controllers/chatController');
const authMiddleware = require('../middlewares/general/authMiddleware');

const routes = new Router();

routes.get('/', authMiddleware, ChatController.getAll);

module.exports = routes;
