const Chat = require('../models/chat');

module.exports = {
    getAll: async (req, res) => {
        try{
            const chat = await Chat.find().populate('sender addressee');

            return res.status(200).json(chat);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
};
