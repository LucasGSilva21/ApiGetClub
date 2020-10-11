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
    //console.log('user connected');
    //console.log(socket.handshake.query);
    let sender = socket.handshake.query.sender;
    let addressee = socket.handshake.query.addressee;
    
    let messages = await getAllMessage(sender, addressee);
    //console.log(messages);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', async data => {
        //console.log(data);
        let chat = await saveMessage(sender, addressee, data.message);
        //console.log(chat);
        let message = await getOneMessage(chat._id);
        //console.log(message);

        socket.emit('receivedMessage', message);
    });
});

server.listen(3333);
