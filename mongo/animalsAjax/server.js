/*
 * MEAN Mongoose - wolves(mongoose) assignment
 * oct 8, 2018  (Oct 9 modularize)
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.listen(8000, function () {
    console.log("listening on port 8000");
})

