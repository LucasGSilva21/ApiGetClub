const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    res.json({ message: 'users' });
});

module.exports = routes;
