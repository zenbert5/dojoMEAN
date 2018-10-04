/*************************************************
 * 
 *  MEAN express - counter assignment (sessions)
 *  Oct 3, 2018
 *  shawn chen
 *  codingDojo
 * 
 *************************************************/


// load modules
var express = require("express");
var session = require('express-session');
// instantiate express
var app = express();

// prepare session functionality
app.use(session({
    secret: 'suPerBleH000',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// set environment
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));

// counter display using session
app.get('/', function(req, res){
    if (!req.session.counter) {
        req.session.counter = 1;
    } else {
        req.session.counter += 1;
    }
    let count = {
        count: req.session.counter,
    }
    res.render('index', count);
});

// +2 to the counter
app.get('/plus2', function(req, res){
    req.session.counter += 1;
    res.redirect('/');
});

// reset counter
app.get('/reset', function(req, res){
    req.session.counter = -1 ;
    res.redirect('/');
});

// start server on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})