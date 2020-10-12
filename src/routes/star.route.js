const { Router } = require('express');

const StarController = require('../controllers/starController')

const routes = new Router();

routes.get('/', StarController.getAll);
routes.post('/', StarController.store);
routes.delete('/:id', StarController.delete);

module.exports = routes;
