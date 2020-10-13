const User = require('../../models/user');
const Yup = require('yup');

module.exports = {
    store: async (req, res, next) => {
        try {
            const { email } = req.body;

            if(await User.findOne({ email })){
                return res.status(400).json({ error: 'User already exists' });
            }

            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().required(),
                cpf: Yup.string().required(),
                cnpj: Yup.string().required(),
                fantasyName: Yup.string().required(),
                service: Yup.string().required(),
            });

            await schema.validate(req.body);
      
            next();
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
};
