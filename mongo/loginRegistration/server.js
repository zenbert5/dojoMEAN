/*
 * MEAN Mongoose - login and registration assignment
 * oct 8, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const session = require('express-session');
const flash = require('express-flash');

app.use(flash());

const sessionStore = new session.MemoryStore;
//app.set('trust proxy', 1);
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'suPerDuperSecretKey',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}));


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