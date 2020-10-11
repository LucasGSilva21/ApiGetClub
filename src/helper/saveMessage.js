const Chat = require('../models/chat');

module.exports = async function save(sender, addressee, message){
    const chat = await Chat.create({
        message,
        sender,
        addressee
    });

    return chat;
};
