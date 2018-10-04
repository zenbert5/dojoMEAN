/*************************************************
 * 
 *  MEAN express - Star Wars API (post)
 *  Oct 3, 2018
 *  shawn chen
 *  codingDojo
 * 
 *************************************************/


// load modules
var express = require('express');
var requestP = require('request-promise'); 
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
app.get('/planet/:id', function(req, res){
    let page = req.params.id;
    var url = 'https://swapi.co/api/planets/?page='+page;
    
    var getGit = url => {
    return new Promise(function (resolve, reject) {
        var request = new request();
        request.open('GET', url);
        request.onload = function() {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error('Error! =>'+request.statusText));
            }
        };
        request.send();
    })};
    getGit(url).then(function(result){
        // convert string from GET to dictionary
        var output = JSON.parse(result);
        res.end(output);
        },
        function(err) {
            console.log(err);
    });
});

// start server on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});