/*************************************************
 * 
 *  MEAN express - Great Number Game (post)
 *  Oct 3, 2018
 *  shawn chen
 *  codingDojo
 * 
 *************************************************/


// load modules
var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

// prepare session functionality
app.use(session({
    secret: 'suPerBleH000',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: true }));

// set environment
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));

// counter display using session
app.get('/', function(req, res){
    const guessVal = Math.floor(Math.random()*100) + 1;
    console.log('Secrete is '+guessVal);
    req.session.secret = guessVal;
    res.render('index');
});

// parse post body and display data
app.post('/submit', function(req, res){
    var guessStatus = 0;
    console.log(req.body.num);
    // hurrah!!!  guessed it right
    if (req.body.num == req.session.secret) {
        guessStatus = 1;
    // guessed low
    } else if (req.body.num < req.session.secret) {
        guessStatus = 0;
    // guessed high
    } else {
        guessStatus = 2;
    }
    const response = {
        status: guessStatus,
        num: req.session.secret,
    }
    res.end(JSON.stringify(response));
});

// start server on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});