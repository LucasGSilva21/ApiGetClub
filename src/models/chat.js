const mongoose = require("../database");

const chatSchema = new mongoose.Schema({
    message: {
        type: String
    },
    sender: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    addressee: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User' 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
