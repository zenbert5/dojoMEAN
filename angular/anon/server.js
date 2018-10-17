/*
 * MEAN angular - anon notes
 * oct 16, 2018
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
app.use(express.static(__dirname + '/anon/dist/anon'));

app.listen(8000, function () {
    console.log(`anon v.${version} - listening on port 8000`);
})

mongoose.connect('mongodb://localhost/anon', { useNewUrlParser: true });
const anonSchema = new mongoose.Schema({
    message: { type: String, required: [true, 'Product title cannot be empty'], minlength: [3, 'Name must be 3 characters or longer'] },
}, { timestamps: true })

const Anon = mongoose.model('anons', anonSchema);


// add a note
app.post('/addANote', (req, res) => {
    Anon.create(req.body, (err, data) => {
        if (err) {
            console.log('error creating a note');
            res.json(err);
        }
        else {
            console.log(`successfully added a note ${data}`);
            res.json(data);
        }
    })
})


// fetch the anon board messages
app.get('/initialize', (req, res) => {
    Anon.find({}, (err, data) => {
        if (err) {
            console.log('error fetching the messages');
            res.json(err);
        }
        else {
            console.log(`successfully gathered the messages ->  ${data}`);
            res.json(data);
        }
    }).sort({createdAt: -1});
})


// resolve data to angular - index.html
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve('./anon/dist/anon/index.html'));
});