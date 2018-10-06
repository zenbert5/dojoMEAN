/***************************************************
 * 
 *  MEAN express - group chat (socket io)
 *  Oct 5, 2018
 *  shawn chen
 *  codingDojo
 *  v1.1
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

io.on('connection', function (socket) {

    // listen on connect - new connection
    socket.on('connection', function (data) {
        let user = querystring.parse(data);
        console.log(user);
        users.push(user);
        let announce = {
            announcer: 'SERVER',
            message: user.name + ' has joined the channel'
        };
        messages.push(announce);
        io.sockets.emit('messages', messages);
    });

    // emit from users on adding new messages
    socket.on('new message', function (data) {
        let msg = querystring.parse(data);
        console.log(msg);
        let announce = {
            announcer: msg.user,
            message: msg.newMsg
        };
        messages.push(announce);
        io.sockets.emit('messages', messages);
    });

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    console.log('server up');
});


// counter display using session
app.get('/', function (req, res) {
    res.render('index');
});
