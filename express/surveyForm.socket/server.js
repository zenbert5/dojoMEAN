/***************************************************
 * 
 *  MEAN express - survey form assignment (socket io)
 *  Oct 4, 2018
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


// WARNING: app.listen

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

io.on('connection', function (socket) {
    var connections = 0;
    socket.on('connect', function(){
        connections++;
        io.sockets.emit('connections', connections);
    });
    socket.on('disconnect', function(){
        connections--;
        io.sockets.emit('connections', connections);
    });
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' });
    console.log('server up');
    socket.on('submit form', function (data) {
        let newData = querystring.parse(data);
        let num = Math.floor(Math.random() * 1000) + 1;
        let sendData = {
            name: newData.name,
            dojo: newData.dojo,
            lango: newData.lango,
            comment: newData.comment,
            number: num
        };
        socket.emit('lucky number', sendData);
    });
});


// counter display using session
app.get('/', function (req, res) {
    res.render('index');
});

// parse post body and display data
app.post('/submit', function (req, res) {
    const output = {
        name: req.body.name,
        dojo: req.body.dojo,
        lango: req.body.lango,
        comment: req.body.comment,
    }
    res.render('result', output);
});
