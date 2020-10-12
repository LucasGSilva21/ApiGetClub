const { Router } = require('express');

const ServiceController = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/general/authMiddleware');

const routes = new Router();

routes.get('/', authMiddleware, ServiceController.getAll);
routes.post('/', authMiddleware, ServiceController.store);
routes.delete('/:id', ServiceController.delete);

module.exports = routes;
