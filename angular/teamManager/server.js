/*
 * MEAN angular - team manager
 * oct 17, 2018
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
app.use(express.static(__dirname + '/team/dist/team'));

app.listen(8000, function () {
    console.log(`product manager v.${version} - listening on port 8000`);
})

mongoose.connect('mongodb://localhost/teamManager', { useNewUrlParser: true });

const gameSchema = new mongoose.Schema({
    game1: { type: String, default: 'None'},
    game2: { type: String, default: 'None'},
    game3: { type: String, default: 'None'}
}, { timestamps: true })

const teamSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Player name cannot be empty'], minlength: [2, 'Name must be 2 characters or longer'] },
    position: { type: String, default: 'None' },
    status: [gameSchema]
}, { timestamps: true })

const Team = mongoose.model('teams', teamSchema);

// routes here

// get the player roster
app.get('/players', (req, res) => {
    Team.find({}, (err, data) => {
        if (err) {
            console.log('error encountered fetching all players');
            res.json(err);
        }
        else {
            console.log(`fetched roster ${data}`);
            res.json(data);
        }
    })
})

// add a player
app.post('/addPlayer', (req, res) => {
    Team.create(req.body, (err, data) => {
        if (err) {
            console.log('error encountered inserting new player');
            res.json(err);
        }
        else {
            console.log(`added new player ${data}`);
            res.json(data);
        }
    })
})


// resolve data to angular - index.html
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve('./team/dist/team/index.html'));
});