/*
 * MEAN angular - ninja gold
 * oct 11, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/ninja/dist/ninja'));

app.listen(8000, function () {
    console.log("listening on port 8000");
})

mongoose.connect('mongodb://localhost/ninjaGold', { useNewUrlParser: true });
const ninjaSchema = new mongoose.Schema({
    //name: { type: String, required: [true, 'Name cannot be empty'] },
    activity: { type: String },
    gold: { type: Number }
    //leaders: [{ name: { type: String } }, { score: { type: Number } }]
}, { timestamps: true })

const Ninja = mongoose.model('ninjas', ninjaSchema);


app.post('/updateActivity', (req, res) => {
    Ninja.create({activity: req.body.activity}, (err, data) => {
    // for bonus - store gold
        if (err) {
            console.log(`error occurred ${err}`);
            res.json({status: false, data: err}); 
        } else {
            console.log('activity saved!');
            res.json({status: true, data: data});
        }
    })
})

app.post('/saveProgress', (req, res) => {
    console.log('attempt to save data!')
    console.log(req.body.gold);
    Ninja.updateOne({gold: req.body.gold}, (err, data) => {
    // for bonus - store gold
        if (err) {
            console.log(`error occurred ${err}`);
            /* res.json(err); */ 
        } else {
            console.log('activity saved!');
            res.json(data);
        }
    })
})

app.get('/getProgress', (req, res) => {
    Ninja.find({}, (err, data) => {
    // for bonus - store gold
        if (err) {
            console.log(`error occurred ${err}`);
            /* res.json(err); */ 
        } else {
            console.log('activity saved!');
            res.json(data);
        }
    })
})
