/*
 * MEAN Mongoose - wolves(mongoose) assignment
 * oct 8, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(8000, function () {
    console.log("listening on port 8000");
})

// database config
mongoose.connect('mongodb://localhost/wolves', { useNewUrlParser: true });
const WolvesSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    size: String,
    color: String,
    created_on: Date
})

mongoose.model('Wolves', WolvesSchema);
var Wolf = mongoose.model('Wolves');

// routes

// render roster(index) of objects
app.get('/', function (req, res) {
    Wolf.find({}, function (err, wolves) {
        const data = { wolves: wolves };
        res.render('index', data);
    })
})

// render form to enter a new wolf object
app.get('/wolves/new', function (req, res) {
    res.render('addNew');
})

// render 1 wolf object
app.get('/wolves/:id', function (req, res) {
    Wolf.find({ _id: req.params.id }, function (err, wolf) {
        console.log(wolf)
        const data = { wolf: wolf[0] };
        res.render('wolf', data);
    })
})

// render form to edit wolf
app.get('/wolves/edit/:id', function (req, res) {
    Wolf.find({ _id: req.params.id }, function (err, wolf) {
        console.log(wolf)
        const data = { wolf: wolf[0] };
        res.render('wolfEdit', data);
    })
})

// update wolf
app.post('/wolves/:id', function (req, res) {
    Wolf.findOneAndUpdate({ _id: req.params.id }, {$set: {name: req.body.name, age: req.body.age, gender: req.body.gender, color: req.body.color, size: req.body.size}}, function (err, wolf) {
        if (err) {
            console.log('something went wrong with update');
            res.send(500, { error: err })
        } else {
            console.log('updated successfully');
            res.redirect('/');
        }
    })
})

// destroy/delete one object
app.get('/wolves/destroy/:id', function (req, res) {
    Wolf.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) {
            console.log('error in removal');
            throw err;
        } else {
            console.log('document deleted');
            res.status(204);
            res.redirect('/');
        }
    })
})

// create one object - save to db
app.post('/wolves', function (req, res) {
    const date = new Date();
    let wolf = new Wolf({
        name: req.body.name,
        age: req.body.age,
        size: req.body.size,
        gender: req.body.gender,
        color: req.body.color,
        created_on: date
    });
    wolf.save(function (err) {
        if (err) {
            console.log('something went wrong');
        } else {
            console.log('successfully updated a wolf');
            res.redirect('/');
        }
    })
})
