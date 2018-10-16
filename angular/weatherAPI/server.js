/*
 * MEAN angular - weather api
 * oct 13, 2018
 * shawn chen
 * codingDojo SJ
 * 
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const version = '1.0';

app.use(bodyParser.json());
app.use(express.static(__dirname + '/weather/dist/weather'));

app.listen(8000, function () {
    console.log(`Weather API v.${version} - listening on port 8000`);
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve('./weather/dist/weather/index.html'));
});
