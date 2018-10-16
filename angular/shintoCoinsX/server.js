/*
 * MEAN angular - Shinto Coins
 * oct 15, 2018
 * shawn chen
 * codingDojo SJ
 * 
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const version = '1.0';

app.use(bodyParser.json());
app.use(express.static(__dirname + '/coins/dist/coins'));

app.listen(8000, function () {
    console.log(`Shinto Coins v.${version} - listening on port 8000`);
})

mongoose.connect('mongodb://localhost/coins', { useNewUrlParser: true });
const coinSchema = new mongoose.Schema({
    wallet: { type: Number, default: 0 },
    ledger: [{
        transaction_id: { type: Number },
        action: { type: String },  
        amount: { type: Number}, 
        value: { type: Number }
    }]
}, { timestamps: true })

const Coin = mongoose.model('coins', coinSchema);
const questions = [
    { question: 'What is the 7th\'s Fibonacci sequence number?', answer: 13},
    { question: 'What is the 2nd Fibonacci sequence number?', answer: 1},
    { question: 'What is the square root of 256', answer: 16},
    { question: 'What is the factorial of 5', answer: 120}
]

// provide a random question and answer to mine coine
app.get('/question', (req, res) => {
    const randNum = Math.floor(Math.random() * 4) + 1;
    console.log('Responded with question ',randNum);
    res.json(questions[randNum]);
})

// initialize ledger or fetch ledger data
app.get('/ledger', (req, res) => {
    console.log('hit ledger call');
    Coin.findOne({}, {}, {sort: { 'created_at' : -1 } }, (err, data) => {
        if (err) {
            // if error, create new record
            console.log('Problem reading database to fetch ledger');
            res.json(err);
        } else {
            // no ledger - create one
            if (data == null) {
                let ledgerItems = {
                    transaction_id: 1,
                    action: 'None',
                    amount: 0,
                    value: 0
                }
                let newLedger = {
                    wallet: 0,
                    ledger: []
                }
                newLedger['ledger'].push(ledgerItems);
                console.log(newLedger);
                Coin.create(newLedger, (err, data) => {
                    if (err) {
                        console.log('Error encountered fetching ledger');
                        res.json(err);
                    } else {
                        console.log('Initialized ledger');
                        res.json(data);
                    }
                })
            } else {
                // data exists
                console.log('Fetched ledger from server, proceeding back with data');
                res.json(data);
            }
        }
    })
})

// fetch ledger to display
app.get('/getLedger', (req, res) => {
    Coin.find({}, (err, data) => {
        if (err) {
            console.log('Problem fetching ledger');
            res.json(err);
        }
        else {
            console.log('Got ledger');
            res.json(data);
        }
    })
})

// post entry to ledger
app.post('/update', (req, res) => {
    Coin.updateOne({_id: req.body._id}, {$set: {wallet: req.body.wallet, ledger: req.body.ledger}}, (err, data) => {
        if (err) {
            console.log('Problem with updating the ledger! --> ', req.body);
            res.json(err);
        } else {
            console.log('Data update successful!');
            res.json(data);
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve('./coins/dist/coins/index.html'));
});