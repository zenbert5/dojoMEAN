
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    display: function (req, res) {
        Quote.find({}, function (err, quotes) {
            console.log(quotes)
            const data = { quotes: quotes};
            res.render('quotes', data);
        })
    },
    create: function (req, res) {
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
    }
};