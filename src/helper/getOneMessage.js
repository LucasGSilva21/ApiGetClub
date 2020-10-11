const Chat = require('../models/chat');

module.exports = async function get(id){
    const message = await Chat.findById(id).populate('sender addressee');

    return message;
};
