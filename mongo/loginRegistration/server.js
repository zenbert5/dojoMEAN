/*
 * MEAN Mongoose - login and registration assignment
 * oct 8, 2018
 * shawn chen
 * codingDojo SJ
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const path = require('path');
const app = express();

const session = require('express-session');
const flash = require('express-flash');
const sessionStore = new session.MemoryStore;
//app.set('trust proxy', 1);
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'suPerDuperSecretKey',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}));

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
mongoose.connect('mongodb://localhost/loginRegister', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'Name cannot be empty'] 
    },
    first_name: { 
        type: String, 
        required: [true, 'Comment must be entered'], 
        minlength: [2, 'Two or more characters required'] 
    },
    last_name: { 
        type: String, 
        required: [true, 'Comment must be entered'], 
        minlength: [2, 'Two or more characters required'] 
    },
    password: { 
        type: String, 
        required: [true, 'Comment must be entered'], 
        minlength: [8, 'Password must be at least 8 characters'] 
    },
    birthday: { 
        type: Date, 
        required: [true, 'Birthday must be provided'] 
    },
}, { timestamps: true })

const User = mongoose.model('User', userSchema);
// routes

// render roster(index) of objects
app.get('/', (req, res) => {
    const data = {
        error: req.flash('error'),
        success: req.flash('success')
    }
    res.render('index', data);
});

app.post('/register', (req, res) => {
    console.log(req.body);
    User.find({ email: req.body.email }, (err, result) => {
        if (err) {
            console.log('Error encountered with registration ' + err);
            for (var key in err.errors){
                req.flash('error', err.errors[key].message);
            }
        } else {
            if (result.length) {
                console.log('Email already exist!  Cannot register again');
                req.flash('error', 'Email entered has already been registered.  Please contact administrator or try a new email.');
            } else {
                const hash = bcrypt.hashSync(req.body.password, salt);
                let newUser = new User(req.body);
                newUser.password = hash;
                newUser.save((err) => {
                    if (err) {
                        console.log('Error in registering user');
                        for (var key in err.errors){
                            req.flash('error', err.errors[key].message);
                        }
                        res.redirect('/');
                    } else {
                        console.log('User successfully registered');
                        // set message for user
                        req.flash('success', 'Registration successful!');
                    }
                })
            }
        }
    });
    res.redirect('/');
});

app.post('/login', (req, res) => {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log('Email not found');
            // notify user and send message to display
        } else {
            console.log(user);
            const hash = user[0].password;
            console.log('password hash is ' + hash);
            if (bcrypt.compareSync(req.body.password, hash)) {
                console.log('User is authenticated - setup session data');
                // session data here
                // redirect to dashboard
                res.redirect('/');
            } else {
                console.log('User is not authenticated');
                // message user about login failure
                res.redirect('/');
            }
        }
    })
});
