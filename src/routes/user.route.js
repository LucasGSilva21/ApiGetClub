const { Router } = require('express');

const UserController = require('../controllers/userController');
const UserValidate = require('../middlewares/validates/user.validate');
const authMiddleware = require('../middlewares/general/authMiddleware');

const routes = new Router();

routes.get('/', authMiddleware, UserController.getAll);
routes.get('/:userId', authMiddleware, UserController.getOne);
routes.post('/', UserValidate.store, UserController.store);
routes.delete('/:userId', authMiddleware, UserController.delete);
routes.get('/:userId/star', authMiddleware, UserController.getStar);

module.exports = routes;
