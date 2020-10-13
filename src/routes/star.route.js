const { Router } = require('express');

const StarController = require('../controllers/starController');
const authMiddleware = require('../middlewares/general/authMiddleware');

const routes = new Router();

routes.get('/', authMiddleware, StarController.getAll);
routes.post('/', authMiddleware, StarController.store);
routes.delete('/:id', authMiddleware, StarController.delete);

module.exports = routes;
