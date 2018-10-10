/*
 * MEAN mongodb - 1955 API 
 * oct 9, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.listen(8000, function () {
    console.log("listening on port 8000");
})

mongoose.connect('mongodb://localhost/api1955', { useNewUrlParser: true });
const peopleSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name cannot be empty'] },
}, { timestamps: true })

const People = mongoose.model('People', peopleSchema);


app.get('/', (req, res) => {
    People.find({}, (err, messages) => {
        res.json(messages)
    }).sort({createdAt: -1});
})

app.get('/new/:name', (req, res) => {
    People.create({name: req.params.name }, (err, doc) => {
        console.log(doc);
        res.json(doc);
    })
})

app.get('/remove/:name', (req, res) => {
    People.deleteOne({name: req.params.name}, (err) => {
        if (err) {
            console.log('Error in removing the document - ' + err);
        }
    })
})

app.get('/:name', (req, res) => {
    People.find({name: req.params.name}, (err, doc) => {
        if (err) {
            console.log('Error in locating document matching -> ' + req.params.name);
        } else {
            res.json(doc);
        }
    })
})