const User = require('../../models/user');

module.exports = {
    store: async (req, res, next) => {
        const { email } = req.body;

        if(await User.findOne({ email })){
            return res.status(400).json({ error: 'User already exists' });
        }else{
            next();
        }
    },
};
