/***************************************************
 * 
 *  MEAN express - notifications (socket io)
 *  Oct 10, 2018
 *  shawn chen
 *  codingDojo
 * 
 ***************************************************/


// load modules
const express = require("express");
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);

// prepare session functionality
app.use(session({
    secret: 'suPerBleH000',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: true }));

// set environment
app.use(express.static(path.join(__dirname + '/static')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

var users = [];
var messages = [];

io.on('connection', (socket) => {


    // listen on connect - new connection
    socket.on('connection', (data) => {
        let user = querystring.parse(data);
        if (!(socket.id in users)) {
            users.push(socket.id);
        }
        console.log(users);
        let announce = {
            announcer: 'SERVER',
            message: user.name + ' (' + socket.id + ') has joined the channel'
        };
        messages.push(announce);
        io.sockets.emit('messages', messages);
    });

    socket.on('disconnect', () => {
        console.log(socket.id + ' <--> ' + users);
        if (users.includes(socket.id)) {
            console.log(socket.id + ' has index of ' + users.indexOf(socket.id));
            users.splice(users.indexOf(socket.id), 1);
            console.log('new socket registry is ->' + users);
        }
        let announce = {
            announcer: 'SERVER',
            message: socket.id + ' has left the channel'
        };
        messages.push(announce);
        socket.broadcast.emit('messages', messages);
        // Do stuff (probably some jQuery)
    });

    socket.on('new message', (data) => {
        let user = querystring.parse(data);
        console.log(user);
        let announce = {
            announcer: 'SERVER',
            message: user.user + ' (' + socket.id + ') >> ' + user.newMsg
        };
        messages.push(announce);
        io.sockets.emit('messages', messages);
    });

    // emit from users on adding new messages
    socket.on('push button', (data) => {
        let msg = querystring.parse(data);
        console.log(msg);
        let announce = {
            announcer: msg.user,
            message: msg.user + ' (' + socket.id + ') has triggered a notification'
        };
        messages.push(announce);
        io.sockets.emit('messages', messages);
    });

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    console.log('server up');
});


// counter display using session
app.get('/', (req, res) => {
    res.render('index');
});
