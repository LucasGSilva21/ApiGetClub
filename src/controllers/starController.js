const Star = require('../models/star');

module.exports = {
    getAll: async (req, res) => {
        try{
            const star = await Star.find();

            return res.status(200).json(star);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    store: async (req, res) => {
        try{
            const star = await Star.create(req.body);

            return res.status(201).json(star);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    delete: async (req, res) => {
        try{
            await Star.findByIdAndDelete(req.params.id);

            return res.status(200).send();
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
};