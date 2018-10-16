/*
 * MEAN angular - Authors
 * oct 15, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const version = '1.0';

app.use(bodyParser.json());
app.use(express.static(__dirname + '/authors/dist/authors'));

app.listen(8000, function () {
    console.log(`Authors v.${version} - listening on port 8000`);
})

mongoose.connect('mongodb://localhost/authors', { useNewUrlParser: true });
const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'First name cannot be empty'], minlength: [3, 'Name must be 3 characters or longer'] }
}, { timestamps: true })

const Author = mongoose.model('authors', AuthorSchema);

// fetch all authors
app.get('/authors', (req, res) => {
    Author.find({}, (err, data) => {
        if (err) {
            console.log('Encountered problem getting authors data');
            res.json(err);
        }
        else {
            console.log('Acquired authors data.  Responding to request');
            res.json(data);
        }
    })
})

// fetch one author
app.get('/getAuthor/:id', (req, res) => {
    Author.findOne({_id: req.params.id}, (err, data) => {
        if (err) {
            console.log(`Unable to fetch author data of id: ${req.params.id}`);
            res.json(err);
        }
        else {
            console.log('Received user data --> ', data);
            res.json(data);
        }
    })
})

// edit an author
app.put('/editAuthor', (req, res) => {
    Author.findOneAndUpdate({_id: req.body._id}, {$set: {name: req.body.name}}, (err, data) => {
        if (err) {
            console.log(`Unable to update author with id: ${req.params.id}`);
            res.json(err);
        }
        else {
            console.log('Successfully updated author data --> ', data);
            res.json(data);
        }
    })
})

// add an author
app.post('/addAuthor', (req, res) => {
    Author.create(req.body, (err, data) => {
        if (err) {
            console.log(`error adding ${req.body}`);
            res.json(err);
        }
        else {
            console.log(`added user! ${data}`);
            res.json(data);
        }
    })
})

// angular redirect
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve('./authors/dist/authors/index.html'));
});