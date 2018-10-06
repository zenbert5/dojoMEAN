/*************************************************
 * 
 *  MEAN express - weather API (post)
 *  Oct 5, 2018
 *  shawn chen
 *  codingDojo
 * 
 *************************************************/


// load modules
const express = require('express');
const request = require('request'); 
const session = require('express-session');
const querystring = require('querystring');
const path = require('path');
const bodyParser = require('body-parser');

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
app.use(express.static(path.join(__dirname + '/static')));
app.set('views', path.join(__dirname + '/views')); 
app.set('view engine', 'ejs');

// counter display using session
app.get('/', function(req, res){
    res.render('index');
});

// parse post body and display data
app.post('/weather', function(req, res){
    let city = querystring.parse(req.body.city).city;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9b6b2aef755a9eb115ab278f9ece31a0';
    console.log(url);
    var getGit = url => {
        return new Promise(function (resolve, reject) {
            request.get(url, function(err, resp, body){
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(body));
                }
            });
        })
    };
    getGit(url).then(body => {
        // convert string from GET to dictionary
        res.send(body);
    }).catch(err => {console.log('caught', err.message)});
});

// start server on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});