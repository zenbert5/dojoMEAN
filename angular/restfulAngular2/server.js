/*
 * MEAN mangular - RESTful API2
 * oct 10, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/MEAN/dist/MEAN' ));

app.listen(8000, function () {
    console.log("listening on port 8000");
})

mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true });
const tasksSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Name cannot be empty'] },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false }
}, { timestamps: true })

const Task = mongoose.model('Task', tasksSchema);


app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/all', (req, res) => {
    Task.find({}, (err, docs) => {
        res.json(docs)
    }).sort({createdAt: -1});
})

app.get('/:id', (req, res) => {
    Task.findOne({_id: req.params.id }, (err, doc) => {
        console.log(doc);
        res.json(doc);
    })
})

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
        console.log('> '+key+' '+req.body[key]);
        data[key] = req.body[key];
    }
    Task.updateOne({_id: ObjectId(req.params.id)}, {$set: data}, (err, doc) => {
        if (err) {
            console.log('Error in updating the document -> ' + req.params.id);
            res.json(err);
        } else {
            res.json(doc);
        }
    })
})

app.delete('/:id', (req, res) => {
    Task.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            console.log('Error in deleting the document -> ' + req.params.id);
            res.json(err);
        }
    })
})