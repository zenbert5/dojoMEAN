/*
*
*make a package.json file:
yourcommandline> npm init -y
yourcommandline> npm install express --save
yourcommandline> npm install ejs --save
yourcommandline> npm install body-parser --save
yourcommandline> npm install mongoose --save
*
*/

// Require the Express Module
var express = require('express');

// require mongoose 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// This is the route that we already have in our server.js
// When the user presses the submit button on index.ejs it should send a post request to '/users'.  In
//  this route we should add the user to the database and then redirect to the root route (index view).
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    res.redirect('/');
})

// Use native promises
mongoose.Promise = global.Promise;

app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({
        name: req.body.name,
        age: req.body.age
    });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
        }
    })
})

// The root route -- we want to get all of the users from the database and then render the index view passing it all of the users
app.get('/', function (req, res) {
    User.find({}, function (err, users) {
        // This is the method that finds all of the users from the database
        // Notice how the first parameter is the options for what to find and the second is the
        //   callback function that has an error (if any) and all of the users
        // Keep in mind that everything you want to do AFTER you get the users from the database must
        //   happen inside of this callback for it to be synchronous 
        // Make sure you handle the case when there is an error, as well as the case when there is no error
    })
})

// ...retrieve all records matching {name:'Jessica'}
User.find({
    name: 'Jessica'
}, function (err, users) {
    // Retrieve an array of users matching the name. Even if 1 record is found, the result will be an array the size of 1, with 1 object inside. (Notice, if we are expecting to retrieve one record, we may want to use findOne and retrieve the object as oppose to an array the size of one.
    // This code will run when the DB is done attempting to retrieve all matching records to {name:'Jessica'}
})
// ...retrieve 1 record (the first record found) matching {} 
User.findOne({}, function (err, user) {
    // Retrieve 1 object
    // This code will run when the DB is done attempting to retrieve 1 record.
})


// ...create a new instance of the User Schema and save it to the DB.
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function (err) {
    // This code will run when Mongo has attempted to save the record.
    // If (err) exists, the record was not saved, and (err) contains validation errors.
    // If (err) does not exist (undefined), Mongo saved the record successfully.
})

// ...delete all records of the User Model
User.remove({}, function (err) {
    // This code will run when the DB has attempted to remove all matching records to {}
})


// ...delete 1 record by a certain key/value.
User.remove({
    _id: 'insert record unique id here'
}, function (err) {
    // This code will run when the DB has attempted to remove one matching record to {_id: 'insert record unique id here'}
})

// ...update any records that match the query
User.update({
    name: 'Andriana'
}, {
    $push: {
        pets: {
            name: 'Skippy',
            type: 'cactus'
        }
    }
}, function (err) {
    // This code will run when the DB has attempted to update the matching record.
})

// another way to update a record
User.find({
    name: 'Andriana'
}, function (err, user) {
    user.name = 'Andri';
    user.pets.push({
        name: 'Skippy',
        type: 'cactus'
    });
    user.save(function (err) {
        // if save was successful awesome!
    })
})




// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({
    extended: true
}));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// Add User Request 
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    res.redirect('/');
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})