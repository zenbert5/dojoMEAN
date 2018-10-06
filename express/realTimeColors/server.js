/***************************************************
 * 
 *  MEAN express - real-time colors (socket io)
 *  Oct 5, 2018
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

var currentColor = 'white';

io.on('connection', function (socket) {

    socket.on('connection', function () {
        socket.emit('initialize', { color: currentColor });
    })
    socket.on('color change', function (data) {
        console.log('color is now ' + data.color);
        currentColor = data.color;
        io.sockets.emit('color update', { color: currentColor });
    });
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    console.log('server up');
});


// counter display using session
app.get('/', function (req, res) {
    res.render('index');
});
