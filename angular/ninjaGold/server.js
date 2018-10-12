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
    name: { type: String, required: [true, 'Name cannot be empty'] },
    activity: [{ type: String }],
    score: { type: Number },
    leaders: [{ name: { type: String } }, { score: { type: Number } }]
}, { timestamps: true })

const Ninja = mongoose.model('ninjas', ninjaSchema);


/* app.get('/', (req, res) => {
    res.render('index.html');
}) */

function randNumRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


app.get('/farm', (req, res) => {
    let gold = randNumRange(2, 5);
    
})


/*
app.get('/:id', (req, res) => {
    Task.findOne({ _id: req.params.id }, (err, doc) => {
        console.log(doc);
        res.json(doc);
    })
})

app.get('/approx/:title', (req, res) => {
    Task.findOne({ title: new RegExp('^' + req.params.title + '$', "i") }, (err, doc) => {
        console.log(doc);
        res.json(doc);
    })
});

app.post('/create', (req, res) => {
    Task.create(req.body, (err, doc) => {
        if (err) {
            console.log('Error in creating the document - ' + err);
            res.redirect('/all');
        } else {
            res.json(doc);
        }
    })
})

app.put('/:id', (req, res) => {
    // prepare put
    let data = {};
    // iterate
    for (let key in req.body) {
        console.log('> ' + key + ' ' + req.body[key]);
        data[key] = req.body[key];
    }
    Task.updateOne({ _id: ObjectId(req.params.id) }, { $set: data }, (err, doc) => {
        if (err) {
            console.log('Error in updating the document -> ' + req.params.id);
            res.json(err);
        } else {
            res.json(doc);
        }
    })
})

app.delete('/:id', (req, res) => {
    Task.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            console.log('Error in deleting the document -> ' + req.params.id);
            res.json(err);
        }
    })
}) */