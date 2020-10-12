const express = require('express');
const routes = require('./routes/index');

const saveMessage = require('./helper/saveMessage');
const getAllMessage = require('./helper/getAllMessage');
const getOneMessage = require('./helper/getOneMessage');

const app = express();
app.use(express.json());
app.use(routes);

const server = require('http').createServer(app);
const socket = require('socket.io')(server);

socket.on('connection', async (socket) => {
    let sender = socket.handshake.query.sender;
    let addressee = socket.handshake.query.addressee;
    
    let messages = await getAllMessage(sender, addressee);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', async data => {
        let chat = await saveMessage(sender, addressee, data.message);
        
        let message = await getOneMessage(chat._id);

        socket.emit('receivedMessage', message);
    });
});

server.listen(process.env.PORT || 3333);
