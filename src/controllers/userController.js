const User = require('../models/user');

module.exports = {
    getAll: async (req, res) => {
        try{
            const user = await User.find();

            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    store: async (req, res) => {
        try{
            const user = await User.create(req.body);

            user.password = undefined;

            return res.status(201).json(user);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    delete: async (req, res) => {
        try{
            await User.findByIdAndDelete(req.params.id);

            return res.status(200).send();
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
};
