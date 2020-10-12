const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    cpf: {
        type: String,
        required: false,
    },
    cnpj: {
        type: String,
        required: false,
    },
    fantasyName: {
        type: String,
        required: false,
    },
    service: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Service' 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
