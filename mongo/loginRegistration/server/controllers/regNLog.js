

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const User = mongoose.model('User');

module.exports = {

    index: (req, res) => {
        const data = {
        error: req.flash('error'),
        success: req.flash('success')
        }
        res.render('index', data);
    },

    register: (req, res) => {
        User.find({ email: req.body.email }, (err, result) => {
            if (err) {
                console.log('Error encountered with registration ' + err);
                for (var key in err.errors){
                    req.flash('error', err.errors[key].message);
                }
                res.status(500);
                res.redirect('/');
            } else if (result.length) {
                console.log('Email already exist!  Cannot register again');
                req.flash('error', 'Email entered has already been registered.  Please contact administrator or try a new email.');
                res.redirect('/');
            } else {
                const hash = bcrypt.hashSync(req.body.password, salt);
                let newUser = new User(req.body);
                newUser.password = hash;
                newUser.save((err) => {
                    if (err) {
                        console.log('Error in registering user');
                        req.flash('error', 'Error in registering user - please check your inputs');
                        res.redirect('/');
                    } else {
                        console.log('User successfully registered');
                        // set message for user
                        req.flash('success', 'Registration successful!');
                        res.redirect('/');
                    }
                })
            }
        });
    },

    login: (req, res) => {
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
    }

}