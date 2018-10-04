/*
 *  MEAN - express ejs cats
 *  Oct 2, 2018
 *  shawn chen
 *  codingDojo
 * 
 */

var express = require("express");
var app = express();

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// this is the line that tells our server to use the "/static" folder for static contentcopy
app.use('/static', express.static(__dirname + '/static'));

/* app.use(function(req, res){
    res.redirect('/cats');
}); */

app.get('/cats', function (request, response){
    var showCats = [
        { tag: 'cat1', cat: '/static/images/cat1.jpeg', url: '/cats/1' },
        { tag: 'cat2', cat: '/static/images/cat2.jpeg', url: '/cats/2' },
        { tag: 'cat3', cat: '/static/images/cat3.jpg', url: '/cats/3' },
    ];
    response.render('index', {cats: showCats });
})

app.get('/cats/1', function (request, response){
    var cat = {
        name: 'Curly',
        food: 'Fish', 
        age: 7,
        spots: ['In front of the fireplace', 'Catnap Sack'],
        url: '/static/images/cat1.jpeg'
    };
    response.render('cat', {cat: cat});
})

app.get('/cats/2', function (request, response){
    var cat = {
        name: 'Maddy',
        food: 'Sushi', 
        age: 3,
        spots: ['Swimming Pool Deck', 'Roof'],
        url: '/static/images/cat2.jpeg'
    };
    response.render('cat', {cat: cat});
})

app.get('/cats/3', function (request, response){
    var cat = {
        name: 'Crazy',
        food: 'Junk Food', 
        age: 1,
        spots: ['Under the bed', 'Joe\'s hair', 'Top of can'],
        url: '/static/images/cat3.jpg'
    };
    response.render('cat', {cat: cat});
})


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})

