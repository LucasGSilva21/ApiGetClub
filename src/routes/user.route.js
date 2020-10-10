const { Router } = require('express');

const UserController = require('../controllers/userController');
const UserValidate = require('../middlewares/validates/user.validate');

const routes = new Router();

routes.get('/', UserController.getAll);
routes.post('/', UserValidate.store, UserController.store);

module.exports = routes;
