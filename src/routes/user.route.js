const { Router } = require('express');

const UserController = require('../controllers/userController');
const UserValidate = require('../middlewares/validates/user.validate');

const routes = new Router();

routes.get('/', UserController.getAll);
routes.get('/:userId', UserController.getOne);
routes.post('/', UserValidate.store, UserController.store);
routes.delete('/:userId', UserController.delete);
routes.get('/:userId/star', UserController.getStar);

module.exports = routes;
