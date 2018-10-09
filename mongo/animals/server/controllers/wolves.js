
const mongoose = require('mongoose');
const Wolf = mongoose.model('Wolves');

module.exports = {

    index: (req, res) => {
        Wolf.find({}, (err, wolves) => {
            const data = { wolves: wolves };
            res.render('index', data);
        })
    },

    new: (req, res) => {
        res.render('addNew');
    },

    display: (req, res) => {
        Wolf.find({ _id: req.params.id }, (err, wolf) => {
            console.log(wolf)
            const data = { wolf: wolf[0] };
            res.render('wolf', data);
        })
    },

    edit: (req, res) => {
        Wolf.find({ _id: req.params.id }, (err, wolf) => {
            console.log(wolf)
            const data = { wolf: wolf[0] };
            res.render('wolfEdit', data);
        })
    },

    update: (req, res) => {
        Wolf.findOneAndUpdate({ _id: req.params.id }, {$set: {name: req.body.name, age: req.body.age, gender: req.body.gender, color: req.body.color, size: req.body.size}}, function (err, wolf) {
            if (err) {
                console.log('something went wrong with update');
                res.send(500, { error: err })
            } else {
                console.log('updated successfully');
                res.redirect('/');
            }
        })
    },

    destroy: (req, res) => {
        Wolf.findByIdAndRemove(req.params.id, (err, data) => {
            if (err) {
                console.log('error in removal');
                throw err;
            } else {
                console.log('document deleted');
                res.status(204);
                res.redirect('/');
            }
        })
    },

    create: (req, res) => {
        const date = new Date();
        let wolf = new Wolf({
            name: req.body.name,
            age: req.body.age,
            size: req.body.size,
            gender: req.body.gender,
            color: req.body.color,
            created_on: date
        });
        wolf.save(function (err) {
            if (err) {
                console.log('something went wrong');
            } else {
                console.log('successfully updated a wolf');
                res.redirect('/');
            }
        })
    }
}