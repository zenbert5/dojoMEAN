/*
 * MEAN angular - Quote Ranks
 * oct 178, 2018
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
app.use(express.static(__dirname + '/quote/dist/quote'));

app.listen(8000, function () {
    console.log(`Quote Ranks v.${version} - listening on port 8000`);
})

mongoose.connect('mongodb://localhost/quoteRanks', { useNewUrlParser: true });

const authorSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Author name cannot be empty'], minlength: [2, 'Name must be 2 characters or longer'] },
    quotes: [{
        quote: { type: String, required: [true, 'quote cannot be empty'], minlength: [3, 'quote must be at least 3 characters'] },
        votes: { type: Number, default: 0 }
    }]
}, { timestamps: true })

const Author = mongoose.model('authors', authorSchema);

// routes here

// get all authors
app.get('/authors', (req, res) => {
    Author.find({}, (err, data) => {
        if (err) {
            console.log('error encountered fetching all authors');
            res.json(err);
        }
        else {
            console.log(`fetched authors ${data}`);
            res.json(data);
        }
    })
})

// add author
app.post('/addAuthor', (req, res) => {
    Author.create(req.body, (err, data) => {
        if (err) {
            console.log('Encountered error adding author');
            res.json(err);
        }
        else {
            console.log('Successfully added author -> ', data);
            res.json(data);
        }
    })
})

// add a quote
app.post('/addQuote/:id', (req, res) => {
    console.log(`pushing ${req.body} into user quotes`);
    console.log(`-> ${req.body.quote} ${req.body.votes} on ${req.params.id}`);
    Author.updateOne({ _id: req.params.id }, {$push: {quotes: req.body}}, (err, data) => {
        if (err) {
            console.log('Encountered error adding author');
            res.json(err);
        }
        else {
            console.log('Successfully added author -> ', data);
            res.json(data);
        }
    })
})

// get author
app.get('/author/:id', (req, res) => {
    Author.findOne({ _id: req.params.id}, (err, data) => {
        if (err) {
            console.log('Encountered error locating author');
            res.json(err);
        }
        else {
            console.log('Successfully located author record -> ', data);
            res.json(data);
        }
    })
})

// update quote
app.put('/updateQuote', (req, res) => {
    console.log('quotes update--> ',req.body);
    Author.updateOne({ quotes: {$elemMatch: { _id : req.body._id }}}, {$set: { 'quotes.$.votes': req.body.votes}}, (err, data) => {
        if (err) {
            console.log('Encountered error updating votes on quote');
            res.json(err);
        }
        else {
            console.log('Successfully updated votes', data);
            res.json(data);
        }
    })
})

// delete a quote
app.delete('/deleteQuote/:id', (req, res) => {
    console.log('deleting a quote ', req.params.id);
    Author.update({ quotes: {$elemMatch: { _id : req.params.id }}}, {$pull: { quotes: { _id: req.params.id}}}, (err, data) => {
        if (err) {
            console.log('Encountered error deleting quote');
            res.json(err);
        }
        else {
            console.log('Successfully deleted quote', data);
            res.json(data);
        }
    })
})


// resolve data to angular - index.html
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./quote/dist/quote/index.html'));
});