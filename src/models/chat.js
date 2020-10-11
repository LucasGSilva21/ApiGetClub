const mongoose = require("../database");

const chatSchema = new mongoose.Schema({
    message: {
        type: String
    },
    sender: {
        type: String
    },
    addressee: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
