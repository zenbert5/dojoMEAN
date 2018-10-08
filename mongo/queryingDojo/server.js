/*
 * MEAN Mongoose - querying dojo assignment
 * oct 7, 2018
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
mongoose.connect('mongodb://localhost/queryDojo', { useNewUrlParser: true });
const QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    quoted_on: Date
})

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

// routes
app.get('/', function (req, res) {
    res.render('index');
})

app.get('/quotes', function (req, res) {
    Quote.find({}, function (err, quotes) {
        console.log(quotes)
        const data = { quotes: quotes};
        res.render('quotes', data);
    })
})

app.post('/quotes', function (req, res) {
    const date = new Date();
    let quote = new Quote({
        name: req.body.name,
        quote: req.body.quote,
        quoted_on: date
    });
    quote.save(function (err) {
        if (err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a quote');
            res.redirect('/quotes');
        }
    })
})
