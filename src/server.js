const express = require('express');
const routes = require('./routes/index');

const saveMessage = require('./helper/saveMessage');
const getMessage = require('./helper/getMessage');

const app = express();
app.use(express.json());
app.use(routes);

const server = require('http').createServer(app);
const socket = require('socket.io')(server);

socket.on('connection', async (socket) => {
    console.log('user connected');
    //console.log(socket.handshake.query);
    let sender = socket.handshake.query.sender;
    let addressee = socket.handshake.query.addressee;
    
    let messages = await getMessage(sender, addressee);
    //console.log(messages);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        //console.log(data);
        saveMessage(sender, addressee, data.message);
        socket.broadcast.emit('receivedMessage', data);
    });
});

server.listen(3333);
