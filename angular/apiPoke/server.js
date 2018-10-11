/*
 * MEAN pokemon api
 * oct 10, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/poke/dist/poke' ));

app.listen(8000, function () {
    console.log("listening on port 8000");
})

/* mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true });
const tasksSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Name cannot be empty'] },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false }
}, { timestamps: true })

const Task = mongoose.model('Task', tasksSchema); */


app.get('/', (req, res) => {
    res.render('index.html');
})
