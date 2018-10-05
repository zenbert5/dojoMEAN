/*************************************************
 * 
 *  MEAN express - survey form assignment (post)
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
    res.render('index');
});

// parse post body and display data
app.post('/submit', function(req, res){
    const output = {
        name: req.body.name,
        dojo: req.body.dojo,
        lango: req.body.lango,
        comment: req.body.comment,
    }
    res.render('result', output);
});

// start server on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})