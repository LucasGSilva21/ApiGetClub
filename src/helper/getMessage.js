const { where } = require('../models/chat');
const Chat = require('../models/chat');

module.exports = async function get(sender, addressee){
    const messages = await Chat.find({
        $or: [
            {
                sender:sender,
                addressee: addressee,
            },
            {
                sender:addressee,
                addressee:sender,
            }
        ]
    });

    return messages;
};
