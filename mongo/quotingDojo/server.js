/*
 * MEAN Mongoose - querying dojo assignment
 * oct 7, 2018 (modularized on oct 9)
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

const db = require('./server/config/mongoose.js');
const Quote = require('./server/models/quote.js');

require('./server/config/routes.js')(app)

app.listen(8000, function () {
    console.log("listening on port 8000");
})
