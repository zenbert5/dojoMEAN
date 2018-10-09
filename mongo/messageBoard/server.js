/*
 * MEAN Mongoose - messageboard assignment
 * oct 8, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const session = require('express-session');
const flash = require('express-flash');
const sessionStore = new session.MemoryStore;
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'suPerDuperSecretKey',
    store: sessionStore,
    resave: true, 
    saveUninitialized: true}));

app.use(flash());

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));



app.listen(8000, function () {
    console.log("listening on port 8000");
})

// database config
mongoose.connect('mongodb://localhost/messageBoard', { useNewUrlParser: true });
const CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name cannot be empty'] },
    comment: { type: String, required: [true, 'Comment must be entered'], minlength: [2, 'Two or more characters required'] },
}, { timestamps: true })
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name cannot be empty'] },
    message: { type: String, required: [true, 'Message must be entered'], minlength: [2, 'Two or more characters required'] },
    comments: [CommentSchema]
}, { timestamps: true })

const Message = mongoose.model('Message', MessageSchema);
const Comment = mongoose.model('Comment', CommentSchema);
// routes

// render roster(index) of objects
app.get('/', (req, res) => {
    Message.find({}, (err, messages) => {
        const data = { 
            wallmessages: messages,
            // [] is passed as expressFlash
            expressFlash: req.flash('error'),
        };
        console.log(data);
        res.render('index', data);
    // sort - order by createdAt date (-1 desc)
    }).sort({createdAt: -1});
})

app.post('/insertMessage', (req, res) => {
    const message = new Message({
        name: req.body.name,
        message: req.body.message,
    });
    message.save((err) => {
        if (err) {
            console.log('Issue with saving ' + err);
            for (var key in err.errors){
                // this works
                console.log('error -> '+ err.errors[key].message);
                req.flash('error', err.errors[key].message);
            }
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    })
})

app.post('/insertComment/:id', (req, res) => {
    Comment.create(req.body, (err, data) => {
        if (err) {
            console.log('Cannot create comment ' + err);
            for (var key in err.errors) {
                req.flash('error', err.errors[key].message);
            }
            res.redirect('/');
        } else {
            Message.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: data } }, (err2, data2) => {
                if (err2) {
                    console.log('Cannot insert comment ' + err2);
                    for (var key in err2.errors) {
                        req.flash('error', err2.errors[key].message);
                    }
                    res.redirect('/');
                } else {
                    console.log('Comment inserted ->' + data2);
                    res.redirect('/');
                }
            })
        }
    })
})