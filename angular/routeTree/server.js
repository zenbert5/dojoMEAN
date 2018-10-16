/*
 * MEAN angular - route tree
 * oct 15, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const version = '1.0';

app.use(bodyParser.json());
app.use(express.static(__dirname + '/routeTree/dist/routeTree'));

app.listen(8000, function () {
    console.log(`Route Tree Stub Server v.${version} - listening on port 8000`);
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve('./routeTree/dist/routeTree/index.html'));
});