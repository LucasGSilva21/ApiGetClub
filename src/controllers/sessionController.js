const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secrect, expire } = require('../config/auth');

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).json({ error: 'User not found' });
        }

        user.password = undefined;

        const token = jwt.sign({ id: user.id }, secrect, {
            expiresIn: expire,
        });

        res.status(200).json({ user, token });
    },
}
