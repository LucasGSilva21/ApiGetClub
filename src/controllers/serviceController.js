const Service = require('../models/service');

module.exports = {
    getAll: async (req, res) => {
        try{
            const service = await Service.find();

            return res.status(200).json(service);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    store: async (req, res) => {
        try{
            const service = await Service.create(req.body);

            return res.status(201).json(service);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    }
};
