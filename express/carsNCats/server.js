/*
 *  MEAN - express cars and cats 
 *  Oct 2, 2018
 *  shawn chen
 *  codingDojo
 * 
 *  using embedded js - ejs for rendering routes
 *  available routes are /cars, cats, and /form
 *  default to index.html
 */

var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// this is the line that tells our server to use the "/static" folder for static contentcopy
app.use('/static', express.static(__dirname + '/static'));

console.log("Let's find out what app is", app);

app.use(function(req, res){
    res.sendfile('./views/index.html');
});
// use app's get method and pass it the base route '/' and a callback
/* app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
    //console.log("The request object", request);
    //console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
    response.send("<h1>Ohlala!!!  You have hit the root</h1>");
}) */

app.get('/cars', function (request, response){
    var showCars = [
        { car: 'static/images/gt350.jpg' },
        { car: 'static/images/GTR2.jpg' },
        { car: 'static/images/supra.jpg' },
        { car: 'static/images/nsx.jpg' }
    ];
    response.render('cars', {cars: showCars });
})

app.get('/cars/new', function (request, response){
    response.render('newCar');
})

app.get('/cats', function (request, response){
    var showCats = [
        { cat: 'static/images/cat1.jpeg' },
        { cat: 'static/images/cat2.jpeg' },
        { cat: 'static/images/cat3.jpg' },
    ];
    response.render('cats', {cats: showCats });
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})

